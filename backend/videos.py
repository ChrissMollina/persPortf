# Filesystem-backed video listing (no database)
import os
import re

# Directory holding the video files, relative to this module
videosDir = os.path.join(os.path.dirname(__file__), "videos")

# Only these extensions are treated as videos
allowedExtensions = {".mp4", ".webm"}


# Split a camelCase string into title-cased words
def camelCaseToTitle(text):
    words = re.findall(r"[A-Z]?[a-z0-9]+|[A-Z]+(?![a-z])", text)
    return " ".join(word.capitalize() for word in words)


# Derive a display title from a NN_camelCaseTitle stem
def deriveTitle(stem):
    remainder = re.sub(r"^\d+_", "", stem)
    return camelCaseToTitle(remainder)


# Scan videosDir and return sorted video metadata
def listVideos():
    fileNames = [
        name
        for name in os.listdir(videosDir)
        if os.path.splitext(name)[1].lower() in allowedExtensions
    ]

    videos = []
    for fileName in sorted(fileNames):
        stem = os.path.splitext(fileName)[0]
        videos.append(
            {
                "id": stem,
                "title": deriveTitle(stem),
                "src": f"/api/videos/{fileName}",
            }
        )

    return videos
