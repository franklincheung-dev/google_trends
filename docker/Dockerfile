# frontend build stage
FROM node:18 AS frontend
WORKDIR /app
COPY package.json ./
RUN npm install
COPY src/frontend ./src/frontend
RUN npm run build

# backend stage
FROM python:3.10-slim AS backend
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY src/backend ./src/backend
COPY --from=frontend /app/src/frontend/.next ./frontend/.next
COPY --from=frontend /app/src/frontend/package.json ./frontend/package.json

CMD ["uvicorn", "src.backend.api:app", "--host", "0.0.0.0", "--port", "8000"]
