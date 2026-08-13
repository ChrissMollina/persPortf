# Cloud Run container image for the Flask API
FROM python:3.12-slim

# Stream logs straight to Cloud Run
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install Python dependencies first for layer caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend application code
COPY main.py .
COPY backend/ backend/

# Serve the app with gunicorn on the Cloud Run port
CMD exec gunicorn --bind 0.0.0.0:${PORT:-8080} --workers 2 --threads 4 "backend.app:create_app()"
