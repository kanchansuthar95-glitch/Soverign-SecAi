# Sovereign SecAI - Project Documentation

## 1. Overview
Sovereign SecAI is a modular, event-driven cybersecurity AI operating system. It is designed to bridge the gap between autonomous AI agents and professional security workflows. Unlike monolithic scripts, Sovereign is a distributed platform that prioritizes policy enforcement, resource efficiency, and procedural evolution.

## 2. Architecture
The system is built on a "Brain-Skill-Tool" architecture:
- **The Brain (Orchestrator)**: Manages state, memory, and high-level planning.
- **The Skills (SkillEngine)**: Reusable, versioned procedures that the AI can refine over time.
- **The Tools (ToolManager)**: Low-level interfaces to system utilities, network scanners, and analysis engines.

## 3. Key Design Decisions
- **Policy First**: Every action is intercepted by the `PolicyEngine` to ensure compliance with `authorized_scope.txt`.
- **Event-Driven**: Communication between the frontend and backend is handled via WebSockets for real-time feedback.
- **Low-Resource Optimization**: Built to run on consumer-grade hardware by using SQLite and a lightweight vector index.

## 4. Development Roadmap
- [x] Core Orchestrator & Policy Engine
- [x] Resonator Persona System
- [x] Skill Library & Evolution Logic
- [ ] Advanced Vector Retrieval (RAG)
- [ ] Multi-Agent Collaborative Planning
- [ ] Voice-to-Command Integration

## 5. Security Warning
This software is for **authorized educational and professional use only**. The developers are not responsible for misuse or illegal actions performed with this tool.
