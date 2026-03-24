# Sovereign SecAI

Sovereign SecAI is a modular, event-driven cybersecurity AI operating system designed for authorized bug bounty and lab workflows.

## Features
- **Resonator Persona System**: Switch between specialized AI agents.
- **Skill Evolution**: AI-driven refinement of security procedures.
- **Policy Enforcement**: Built-in target verification against authorized scope.
- **Real-Time Dashboard**: High-performance console with live intelligence streaming.

## Getting Started
1. **Install Dependencies**:
   ```bash
   ./scripts/install_backend.sh
   ./scripts/install_frontend.sh
   ```
2. **Configure Environment**:
   - Copy `.env.example` to `.env` and add your `GEMINI_API_KEY`.
   - Update `authorized_scope.txt` with your targets.
3. **Start the System**:
   - Terminal 1: `./scripts/start_backend.sh`
   - Terminal 2: `./scripts/start_frontend.sh`

## License
MIT License. See `LICENSE` for details.
