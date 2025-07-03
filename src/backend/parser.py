from bs4 import BeautifulSoup
from typing import List

from .models import Trend


def parse_trending_html(html: str) -> List[Trend]:
    """Parse Google Trends HTML into a list of Trend objects."""
    soup = BeautifulSoup(html, "html.parser")
    # Titles appear within a td with class 'jvkLtd' in a div.mZ3RIc
    title_nodes = soup.select("td.jvkLtd div.mZ3RIc")
    titles = [node.get_text(strip=True) for node in title_nodes]
    return [Trend(title=t) for t in titles]
