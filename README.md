# 🎓 Smart Campus Security Agent

An agentic AI system that listens to real-time voice reports on a college campus,
understands security threats using large language models, and autonomously triggers
safety actions with real-time visualization.

## 🔍 Use Case
- Detect fights, suspicious activity, and crowd risks from voice input
- Assess severity and location
- Notify security and simulate zone lockdown
- Record incidents with confidence and memory

## 🧠 Architecture
Voice → Speech-to-Text → Agentic LLM → Decision Engine → Actions → Dashboard

## 🛠️ Tech Stack
**Frontend**
- React
- CSS Modules
- Material UI
- Framer Motion

**Backend**
- FastAPI
- WebSockets

**AI**
- Whisper
- LLM (GPT-4 / LLaMA-3 / Ollama)
- LangGraph
- FAISS

## 👥 Team Roles
- **AI & Backend:** Speech processing, agent logic, memory, actions
- **Frontend & UX:** UI, animations, real-time visualization
