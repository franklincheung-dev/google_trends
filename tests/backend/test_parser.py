from src.backend.parser import parse_trending_html

SAMPLE_HTML = """
<html><body>
<span class='title'>Topic 1</span>
<span class='title'>Topic 2</span>
</body></html>
"""


def test_parse_trending_html():
    trends = parse_trending_html(SAMPLE_HTML)
    assert len(trends) == 2
    assert trends[0].title == "Topic 1"
