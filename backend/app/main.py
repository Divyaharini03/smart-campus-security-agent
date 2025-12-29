from fastapi import FastAPI

app = FastAPI(title="Smart Campus Security Agent")

@app.get("/")
def root():
    return {"status": "Backend running"}
