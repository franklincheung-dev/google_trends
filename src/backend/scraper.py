from urllib.parse import urlencode
import requests
from .models import TrendRequest, TrendsResponse, Trend
from .parser import parse_trending_html

BASE_URL = "https://trends.google.com/trending"


def build_trends_url(params: TrendRequest) -> str:
    """Construct the Google Trends URL from parameters."""
    query = {
        "geo": params.geo,
        "hl": params.hl,
        "hours": params.hours,
        "category": params.category,
        "sort": params.sort,
        "status": params.status,
    }
    # remove None values
    filtered = {k: str(v) for k, v in query.items() if v is not None}
    return f"{BASE_URL}?{urlencode(filtered)}"


def fetch_trends(params: TrendRequest) -> TrendsResponse:
    """Fetch and parse trending topics."""
    url = build_trends_url(params)
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    topics = parse_trending_html(response.text)
    return TrendsResponse(topics=topics, source_url=url)
