from typing import List, Optional
from pydantic import BaseModel

class TrendRequest(BaseModel):
    """Parameters accepted by the trends API."""

    # Location and language are required with defaults matching Google Trends UI
    geo: str = "HK"
    hl: str = "en"
    # Optional filters. None values will be omitted from the generated URL
    hours: Optional[int] = None
    category: Optional[str] = None
    sort: Optional[str] = None
    status: Optional[str] = None

class Trend(BaseModel):
    """Single trending topic."""

    title: str

class TrendsResponse(BaseModel):
    """Response returned by the API."""

    topics: List[Trend]
    source_url: str
