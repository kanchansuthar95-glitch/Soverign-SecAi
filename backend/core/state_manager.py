import logging
from typing import Dict, Any

class StateManager:
    """
    Manages the global state of the Sovereign SecAI system.
    Tracks active agents, current tasks, and system health.
    """
    def __init__(self):
        self.logger = logging.getLogger("state_manager")
        self.state = {
            "system_status": "online",
            "active_agent": None,
            "current_task": None,
            "last_update": None
        }

    def update_state(self, key: str, value: Any):
        self.state[key] = value
        self.logger.info(f"State updated: {key} = {value}")

    def get_state(self) -> Dict[str, Any]:
        return self.state

state_manager = StateManager()
