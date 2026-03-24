import os

class PolicyEngine:
    """
    Enforces the authorized scope of work.
    Reads from authorized_scope.txt to verify targets.
    """
    def __init__(self):
        self.scope_file = "authorized_scope.txt"
        self.authorized_targets = self._load_scope()

    def _load_scope(self):
        if not os.path.exists(self.scope_file):
            return []
        with open(self.scope_file, "r") as f:
            return [line.strip() for line in f if line.strip() and not line.startswith("#")]

    def is_authorized(self, target: str) -> bool:
        return target in self.authorized_targets or "*" in self.authorized_targets

policy_engine = PolicyEngine()
