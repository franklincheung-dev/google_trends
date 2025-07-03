from bs4 import BeautifulSoup
from typing import List
from .models import Trend


def parse_trending_html(html: str) -> List[Trend]:
    """Parse Google Trends HTML into a list of Trend objects."""
    soup = BeautifulSoup(html, "html.parser")
    titles = [span.get_text(strip=True) for span in soup.select("span.title")]
    return [Trend(title=t) for t in titles]
