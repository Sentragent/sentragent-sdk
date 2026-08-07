/**
 * Example: wrap a Mastra agent with Sentragent's Sentinel.
 *
 * Sentragent is framework-agnostic -- Sentinel just needs a plain
 * `agent(prompt: string) => Promise<string> | string` callable, so any
 * Mastra agent works out of the box once wrapped like this. No special
 * Mastra integration package required.
 *
 * Run:
 *   npm install sentragent
 *   npx tsx mastra_example.ts
 */

import { Sentinel } from "sentragent";
import { mastra } from "./mastra"; // your Mastra instance

async function main() {
  const agent = await mastra.getAgent("yourAgentId"); // replace with your agent's id

  const sentinel = new Sentinel({
    agent: async (prompt: string) => {
      const res = await agent.generate(prompt);
      return res.text;
    },
  });

  // Zero setup, using the built-in scenario library:
  const report = await sentinel.runScenarios({ autoGenerate: 6 });
  console.log(report.summary());

  // Or generated from your agent's own instructions -- bring whatever LLM
  // call you already use in your Mastra setup (OpenAI, Anthropic, etc.):
  //
  // const report2 = await sentinel.runScenarios({
  //   systemPrompt: yourAgentInstructions,
  //   llm: yourLlmCall,
  //   autoGenerate: 10,
  // });
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
