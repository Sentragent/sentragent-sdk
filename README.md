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

```bash
# Python
pip install sentragent

# TypeScript / Node
npm install sentragent
```

## Quickstart

```python
from sentragent import Sentinel

def my_agent(prompt: str) -> str:
    return call_your_agent(prompt)

sentinel = Sentinel(agent=my_agent)
report = sentinel.run_scenarios(auto_generate=5)
print(report.summary())
```

```typescript
import { Sentinel } from "sentragent";

const sentinel = new Sentinel({ agent: myAgent });
const report = await sentinel.runScenarios({ autoGenerate: 5 });
console.log(report.summary());
```

## Project status

Sentragent is in active development (design partner phase). The API is not yet stable. See [CHANGELOG.md](./CHANGELOG.md) for version history.

## Design Partner Program

Looking for 5-10 teams with at least one AI agent in pre-production or production to test the tool on their real agents. Free lifetime access to the Team tier, direct influence on the roadmap, lifetime preferred pricing.

Apply: [calendly.com/marlinibukun](https://calendly.com/marlinibukun)

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
