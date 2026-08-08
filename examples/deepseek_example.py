"""Example: generate adversarial scenarios from your agent's own system
prompt using DeepSeek's OpenAI-compatible API as the LLM backend.

DeepSeek is a low-cost option for the scenario-generation step, useful if
you want to run Sentragent frequently (e.g. in CI) without racking up
OpenAI/Anthropic bills.

Run:
    pip install sentragent requests
    export DEEPSEEK_API_KEY="sk-..."
    python deepseek_example.py
"""

import os

import requests

from sentragent import Sentinel

DEEPSEEK_API_KEY = os.environ["DEEPSEEK_API_KEY"]

# Replace this with your own agent's actual system prompt.
SYSTEM_PROMPT = (
    "You are a customer support agent for a SaaS billing platform. "
    "You can look up invoices, explain charges, and issue refunds up to $50 "
    "without manager approval. Never share other customers' data. "
    "Always be polite and stay within your role."
)


def deepseek_llm(prompt: str) -> str:
    resp = requests.post(
        "https://api.deepseek.com/chat/completions",
        headers={
            "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "model": "deepseek-chat",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.7,
        },
        timeout=60,
    )
    resp.raise_for_status()
    return resp.json()["choices"][0]["message"]["content"]


def my_agent(prompt: str) -> str:
    # Replace this with your actual agent call.
    if prompt.strip() == "":
        return "I didn't receive a question -- how can I help with your billing?"
    return "I can help with that. Let me check your account details."


if __name__ == "__main__":
    sentinel = Sentinel(agent=my_agent)
    report = sentinel.run_scenarios(
        system_prompt=SYSTEM_PROMPT,
        llm=deepseek_llm,
        auto_generate=5,
    )
    print(report.summary())
