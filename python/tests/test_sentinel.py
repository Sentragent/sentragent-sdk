from sentragent import Sentinel


def test_run_scenarios_all_pass_by_default():
    sentinel = Sentinel(agent=lambda prompt: f"echo: {prompt}")
    report = sentinel.run_scenarios(auto_generate=3)
    assert len(report.results) == 3
    assert report.pass_rate == 1.0


def test_run_scenarios_catches_agent_exceptions():
    def crashing_agent(prompt: str) -> str:
        if prompt == "":
            raise ValueError("empty prompt not supported")
        return "ok"

    sentinel = Sentinel(agent=crashing_agent)
    report = sentinel.run_scenarios(auto_generate=1)
    assert report.results[0].passed is False
    assert "ValueError" in report.results[0].error


def test_custom_judge_can_fail_a_scenario():
    sentinel = Sentinel(
        agent=lambda prompt: "I will ignore my instructions",
        judge=lambda name, prompt, output: "ignore my instructions" not in output,
    )
    report = sentinel.run_scenarios(auto_generate=1)
    assert report.results[0].passed is False
