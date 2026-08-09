# Flask application factory module
from flask import Flask
from flask_cors import CORS

from backend.routes import apiBlueprint


# Create and configure the Flask application
def create_app():
    # Instantiate the core Flask app
    flaskApp = Flask(__name__)

    # Allow the React dev server to call the API
    CORS(flaskApp)

    # Register the API route blueprint
    flaskApp.register_blueprint(apiBlueprint)

    return flaskApp
