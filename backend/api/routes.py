from fastapi import APIRouter, Depends
from backend.core.state_manager import state_manager

router = APIRouter()

@router.get("/status")
async def get_status():
    return state_manager.get_state()

@router.post("/agent/select")
async def select_agent(agent_id: str):
    state_manager.update_state("active_agent", agent_id)
    return {"status": "success", "agent": agent_id}
