# Changelog

## [Unreleased]

### Added
- `examples/crewai_example.py` — integration starting point for CrewAI crews.
- `examples/openai_agents_example.py` — integration starting point for OpenAI Agents SDK agents.
- TypeScript test suite (`typescript/src/index.test.ts`, `typescript/src/generator.test.ts`), mirroring the existing Python coverage. `npm test` now builds and runs it (`node --test dist/*.test.js`).

### Fixed
- README no longer claims "Not yet published to PyPI / npm" (it's published) or a "Native CI/CD integration" feature that doesn't exist yet — reworded to match what's actually shipped, with the CI/CD-for-your-agents idea moved to the roadmap where it belongs.
- `python/src/sentragent/__init__.py`'s `__version__` now tracks the published version (`0.1.1`).

## [0.1.1] - 2026-08-13

### Fixed
- Version bump to resolve an npm publish conflict — 0.1.0 had already been published manually to npm to bootstrap Trusted Publisher setup before CI was wired up, so npm rejected a re-publish of the same version number from the release workflow.

## [0.1.0] - 2026-08-13

Initial public release — phase design partners.

### Added
- `Sentinel` class (Python + TypeScript) with `run_scenarios()` / `runScenarios()`.
- Starter library of 6 adversarial scenario templates (empty input, prompt injection, contradictory instructions, extremely long input, out-of-scope request, role confusion).
- Crash detection (scenario fails automatically if the agent raises/throws).
- Optional custom `judge` function for behavioral scoring.
- `generate_scenarios()` / `generateScenarios()` — LLM-powered, bring-your-own-LLM generation of adversarial scenarios tailored to your agent's own system prompt (Python + TypeScript).
- `examples/langchain_example.py` — integration starting point for LangChain agents.
- `examples/mastra_example.ts` — integration starting point for Mastra agents.
- `examples/deepseek_example.py` — LLM-generated scenarios using DeepSeek's OpenAI-compatible API, verified end-to-end against the real API.
- Published to PyPI (`pip install sentragent`) and npm (`npm install sentragent`) via GitHub Actions + OIDC trusted publishing — no more install-from-source required.

### Not yet implemented (roadmap)
- Minimal local dashboard (pass/fail, latency, cost per scenario).
- CI/CD integration (GitHub Actions) for running your agent's scenarios automatically on every deploy — a product feature, distinct from the SDK's own release automation added in this version.
- Production drift detection.
- Hosted dashboard / cloud tier.
