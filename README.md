# Sentragent

**Testez vos agents IA avant qu'ils ne cassent quelque chose en production.**

> Gartner prévoit que plus de 40% des projets d'agents IA en entreprise échoueront d'ici 2027 — pas par manque de capacité du modèle, mais par manque de contrôle avant et après le déploiement.

Sentragent est un SDK open-source d'instrumentation, de test et de surveillance continue pour les agents IA en production. Compatible LangChain, CrewAI et OpenAI Agents SDK.

## Pourquoi Sentragent

- **Génération automatique de scénarios de test adversariaux** à partir de vos prompts existants — pas besoin d'écrire vos cas de test à la main.
- **Scoring de conformité comportementale configurable** (LLM-as-judge) — vos règles métier, pas des règles génériques.
- **Détection de dérive en production** — soyez alerté avant vos utilisateurs, pas après.
- **Intégration CI/CD native** (GitHub Actions) — testez vos agents à chaque déploiement, comme votre code.

## Installation

```bash
# Python
pip install sentragent

# TypeScript / Node
npm install sentragent
```

## Démarrage rapide

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

## Statut du projet

Sentragent est en développement actif (phase design partners). L'API n'est pas encore stable. Voir [CHANGELOG.md](./CHANGELOG.md) pour le suivi des versions.

## Programme Design Partners

On cherche 5 à 10 équipes ayant au moins un agent IA en pré-production ou en production pour tester l'outil sur leurs vrais agents. Accès gratuit à vie au tier Team, influence directe sur la roadmap, tarif préférentiel à vie.

Candidater : [calendly.com/marlinibukun](https://calendly.com/marlinibukun)

## Structure du repo

```
sentragent-sdk/
├── python/           # SDK Python (package "sentragent")
├── typescript/       # SDK TypeScript/Node (package "sentragent")
├── examples/         # Exemples d'intégration (LangChain, CrewAI, OpenAI Agents SDK)
├── CHANGELOG.md
└── LICENSE
```

## Licence

Apache License 2.0 — voir [LICENSE](./LICENSE).

## Contact

marlinibukun@gmail.com · construit par [jaceX10](https://github.com/Sentragent)
