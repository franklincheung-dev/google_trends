from typing import List, Optional
from pydantic import BaseModel

class TrendRequest(BaseModel):
    """Parameters accepted by the trends API."""

    geo: Optional[str] = "US"
    hl: Optional[str] = "en"
    hours: Optional[int] = 24
    category: Optional[str] = None
    sort: Optional[str] = None
    status: Optional[str] = "now"

class Trend(BaseModel):
    """Single trending topic."""

    title: str

class TrendsResponse(BaseModel):
    """Response returned by the API."""

    topics: List[Trend]
    source_url: str
