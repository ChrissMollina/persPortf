# Portfolio backend entry point
import os

from backend.app import create_app

# Build the Flask application instance
appInstance = create_app()

# Run the dev server when executed directly
if __name__ == "__main__":
    # Allow overriding the port (macOS 5000 conflicts)
    serverPort = int(os.environ.get("PORT", 5000))
    appInstance.run(host="127.0.0.1", port=serverPort, debug=True)
