from fastapi import WebSocket
import json
import logging

logger = logging.getLogger("websocket")

class ConnectionManager:
    """
    Manages active WebSocket connections.
    """
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        logger.info("New WebSocket connection accepted.")

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
        logger.info("WebSocket connection closed.")

    async def broadcast(self, message: dict):
        """
        Broadcasts a message to all connected clients.
        """
        for connection in self.active_connections:
            await connection.send_json(message)

manager = ConnectionManager()
