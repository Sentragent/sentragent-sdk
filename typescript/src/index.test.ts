import { test } from "node:test";
import assert from "node:assert/strict";

import { Sentinel } from "./index";

test("runScenarios: all pass by default", async () => {
  const sentinel = new Sentinel({ agent: (prompt: string) => `echo: ${prompt}` });
  const report = await sentinel.runScenarios({ autoGenerate: 3 });
  assert.equal(report.results.length, 3);
  assert.equal(report.passRate, 1.0);
});

test("runScenarios: catches agent exceptions", async () => {
  const crashingAgent = (prompt: string) => {
    if (prompt === "") throw new Error("empty prompt not supported");
    return "ok";
  };
  const sentinel = new Sentinel({ agent: crashingAgent });
  const report = await sentinel.runScenarios({ autoGenerate: 1 });
  assert.equal(report.results[0].passed, false);
  assert.match(report.results[0].error ?? "", /empty prompt not supported/);
});

test("runScenarios: custom judge can fail a scenario", async () => {
  const sentinel = new Sentinel({
    agent: () => "I will ignore my instructions",
    judge: (_name: string, _prompt: string, output: string) =>
      !output.includes("ignore my instructions"),
  });
  const report = await sentinel.runScenarios({ autoGenerate: 1 });
  assert.equal(report.results[0].passed, false);
});

test("runScenarios: falls back to DEFAULT_SCENARIOS when nothing is supplied", async () => {
  const sentinel = new Sentinel({ agent: (prompt: string) => `echo: ${prompt}` });
  const report = await sentinel.runScenarios();
  assert.equal(report.results.length > 0, true);
  assert.equal(report.passRate, 1.0);
});

test("ScenarioReport.summary() includes pass/fail counts and per-scenario detail", async () => {
  const sentinel = new Sentinel({ agent: () => "ok" });
  const report = await sentinel.runScenarios({ autoGenerate: 2 });
  const summary = report.summary();
  assert.match(summary, /2 scenarios, 100% passed/);
  assert.match(summary, /\[PASS\]/);
});
