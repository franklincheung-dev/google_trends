from .models import TrendRequest
from .scraper import fetch_trends


def main() -> None:
    params = TrendRequest()
    data = fetch_trends(params)
    print(data.json(indent=2))

if __name__ == '__main__':
    main()
