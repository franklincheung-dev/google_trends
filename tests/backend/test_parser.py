from src.backend.parser import parse_trending_html

SAMPLE_HTML = """
<table><tbody>
<tr jsname='oKdM2c'><td class='jvkLtd'><div class='mZ3RIc'>Topic 1</div></td></tr>
<tr jsname='oKdM2c'><td class='jvkLtd'><div class='mZ3RIc'>Topic 2</div></td></tr>
</tbody></table>
"""


def test_parse_trending_html():
    trends = parse_trending_html(SAMPLE_HTML)
    assert len(trends) == 2
    assert trends[0].title == "Topic 1"
