# API route definitions for the portfolio
from flask import Blueprint, jsonify

from backend.data import profileData, projectList

# Group all API endpoints under /api
apiBlueprint = Blueprint("api", __name__, url_prefix="/api")


# Health check for uptime probes
@apiBlueprint.get("/health")
def get_health():
    return jsonify({"status": "ok"})


# Return the profile / about content
@apiBlueprint.get("/profile")
def get_profile():
    return jsonify(profileData)


# Return the list of portfolio projects
@apiBlueprint.get("/projects")
def get_projects():
    return jsonify(projectList)