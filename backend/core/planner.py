class Planner:
    """
    Decomposes high-level user goals into a sequence of tool calls.
    """
    async def generate_plan(self, goal: str):
        # Simulated planning logic
        return [
            {"tool": "recon", "target": "example.com", "args": {"type": "subdomain"}},
            {"tool": "analysis", "target": "example.com", "args": {"type": "vuln_scan"}}
        ]
