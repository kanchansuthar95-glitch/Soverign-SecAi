import logging
from backend.core.planner import Planner
from backend.core.policy import PolicyEngine
from backend.tools.tool_manager import ToolManager

class Orchestrator:
    """
    The central brain of Sovereign SecAI.
    Coordinates between planning, policy enforcement, and tool execution.
    """
    def __init__(self):
        self.logger = logging.getLogger("orchestrator")
        self.planner = Planner()
        self.policy = PolicyEngine()
        self.tools = ToolManager()

    async def process_command(self, command: str):
        self.logger.info(f"Processing command: {command}")
        # 1. Plan the actions
        plan = await self.planner.generate_plan(command)
        
        # 2. Execute each step
        results = []
        for step in plan:
            # 3. Check Policy
            if self.policy.is_authorized(step['target']):
                result = await self.tools.execute(step['tool'], step['args'])
                results.append(result)
            else:
                results.append({"error": "Unauthorized target"})
        
        return results

orchestrator = Orchestrator()
