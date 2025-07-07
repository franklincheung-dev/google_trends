# Google Trends Scraper

This project fetches "Trending Now" topics from Google Trends and provides a minimal React interface to filter and download data.

By default the UI starts with `HK` as the location, `en` as the language and a 24 hour time range. Only location and language are required; all other filters are optional and omitted from requests when left blank.

## Requirements

- Python 3.10+
- Node.js 18+
- Docker (optional)

## Development

```bash
# install python deps
pip install -r requirements.txt

# run backend
uvicorn src.backend.api:app --reload
```

```bash
# install frontend deps
cd src/frontend
npm install

# run frontend
npm run dev
```

## Docker

Build and run the application using Docker:

```bash
cd docker
docker build -t google-trends ..
docker run -p 8000:8000 google-trends
```

Or via docker-compose:

```bash
docker-compose up --build
```

## Testing

```bash
pip install -r requirements.txt
pytest --maxfail=1 --disable-warnings -q
```
