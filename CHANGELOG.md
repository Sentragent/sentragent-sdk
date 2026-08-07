# Changelog

## [0.1.0] - Unreleased

Initial scaffolding — pre-release, phase design partners.

### Added
- `Sentinel` class (Python + TypeScript) with `run_scenarios()` / `runScenarios()`.
- Starter library of 6 adversarial scenario templates (empty input, prompt injection, contradictory instructions, extremely long input, out-of-scope request, role confusion).
- Crash detection (scenario fails automatically if the agent raises/throws).
- Optional custom `judge` function for behavioral scoring.
- `generate_scenarios()` / `generateScenarios()` — LLM-powered, bring-your-own-LLM generation of adversarial scenarios tailored to your agent's own system prompt (Python + TypeScript).
- `examples/langchain_example.py` — integration starting point for LangChain agents.

### Not yet implemented (roadmap)
- Minimal local dashboard (pass/fail, latency, cost per scenario).
- CI/CD integration (GitHub Actions) for scenario runs on every deploy.
- Production drift detection.
- Hosted dashboard / cloud tier.
- CrewAI and OpenAI Agents SDK example integrations.
