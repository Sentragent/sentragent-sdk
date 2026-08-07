# Sentragent

**Test your AI agents before they break something in production.**

> Gartner predicts that over 40% of enterprise AI agent projects will fail by 2027 — not because of model limitations, but because of insufficient controls before and after deployment.

Sentragent is an open-source SDK for instrumenting, testing, and continuously monitoring AI agents in production. Compatible with LangChain, CrewAI, and the OpenAI Agents SDK.

## Why Sentragent

- **Automatic adversarial scenario generation** from your existing prompts — no need to hand-write your test cases.
- **Configurable behavioral scoring** (LLM-as-judge) — your business rules, not generic ones.
- **Production drift detection** — get alerted before your users do.
- **Native CI/CD integration** (GitHub Actions) — test your agents on every deploy, just like your code.

## Installation

Not yet published to PyPI / npm (coming soon). For now, install from source:

```bash
# Python
git clone https://github.com/Sentragent/sentragent-sdk.git
cd sentragent-sdk/python
pip install -e .

# TypeScript / Node
git clone https://github.com/Sentragent/sentragent-sdk.git
cd sentragent-sdk/typescript
npm install && npm run build
```

## Quickstart

Zero setup, using the built-in library of common failure-mode scenarios:

```python
from sentragent import Sentinel

def my_agent(prompt: str) -> str:
    return call_your_agent(prompt)

sentinel = Sentinel(agent=my_agent)
report = sentinel.run_scenarios(auto_generate=5)
print(report.summary())
```

Scenarios generated dynamically from your agent's own system prompt — bring
your own LLM call (OpenAI, Anthropic, whatever you already use):

```python
sentinel = Sentinel(agent=my_agent)
report = sentinel.run_scenarios(
    system_prompt=my_agent_system_prompt,
    llm=my_llm_call,       # any Callable[[str], str]
    auto_generate=10,
)
print(report.summary())
```

```typescript
import { Sentinel } from "sentragent";

const sentinel = new Sentinel({ agent: myAgent });

// Zero setup:
const report = await sentinel.runScenarios({ autoGenerate: 5 });

// Or generated from your agent's own system prompt:
const report2 = await sentinel.runScenarios({
  systemPrompt: myAgentSystemPrompt,
  llm: myLlmCall, // (prompt: string) => Promise<string> | string
  autoGenerate: 10,
});

console.log(report.summary());
```

## Project status

Sentragent is in active development (design partner phase). The API is not yet stable. See [CHANGELOG.md](./CHANGELOG.md) for version history.

## Design Partner Program

Looking for 5-10 teams with at least one AI agent in pre-production or production to test the tool on their real agents. Free lifetime access to the Team tier, direct influence on the roadmap, lifetime preferred pricing.

Apply: [calendly.com/marlinibukun/sentragent-design-partner-call](https://calendly.com/marlinibukun/sentragent-design-partner-call)

## Repo structure

```
sentragent-sdk/
├── python/           # Python SDK (package "sentragent")
├── typescript/       # TypeScript/Node SDK (package "sentragent")
├── examples/         # Integration examples (LangChain, CrewAI, OpenAI Agents SDK)
├── CHANGELOG.md
└── LICENSE
```

## License

Apache License 2.0 — see [LICENSE](./LICENSE).

## Contact

marlinibukun@gmail.com · built by [jaceX10](https://github.com/Sentragent)
