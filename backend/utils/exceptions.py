class SovereignException(Exception):
    """Base exception for all Sovereign SecAI errors."""
    def __init__(self, message: str, code: str = "INTERNAL_ERROR"):
        self.message = message
        self.code = code
        super().__init__(self.message)

class PolicyViolationException(SovereignException):
    """Raised when an action violates the authorized scope."""
    def __init__(self, target: str):
        super().__init__(
            message=f"Action blocked: Target '{target}' is outside authorized scope.",
            code="POLICY_VIOLATION"
        )

class ToolExecutionException(SovereignException):
    """Raised when a tool fails to execute correctly."""
    def __init__(self, tool_name: str, error: str):
        super().__init__(
            message=f"Tool '{tool_name}' failed: {error}",
            code="TOOL_ERROR"
        )
