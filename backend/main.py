import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.routes import router as api_router
from backend.api.websocket import manager
from backend.utils.logging import setup_logging

# Initialize Logging
setup_logging()

app = FastAPI(title="Sovereign SecAI OS", version="1.0.0")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API Routes
app.include_router(api_router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Sovereign SecAI OS Backend is Online"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
