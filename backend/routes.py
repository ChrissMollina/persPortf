# API route definitions for the portfolio
import os

from flask import Blueprint, abort, jsonify, send_from_directory

from backend.data import profileData, projectList
from backend.videos import allowedExtensions, listVideos, videosDir

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


# Return the featured video showcase list
@apiBlueprint.get("/videos")
def get_videos():
    return jsonify(listVideos())


# Stream a single video file, supporting Range requests
@apiBlueprint.get("/videos/<fileName>")
def get_video_file(fileName):
    # Reject anything outside the whitelisted extensions
    if os.path.splitext(fileName)[1].lower() not in allowedExtensions:
        abort(404)

    return send_from_directory(videosDir, fileName)