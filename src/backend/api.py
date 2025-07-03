from fastapi import FastAPI, Depends
from .models import TrendRequest, TrendsResponse
from .scraper import fetch_trends

app = FastAPI()

@app.get("/api/trends", response_model=TrendsResponse)
async def get_trends(params: TrendRequest = Depends()) -> TrendsResponse:
    """Return trending topics based on parameters."""
    return fetch_trends(params)
