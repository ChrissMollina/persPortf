# Christian Molina — Portfolio

A minimal portfolio website. Flask (python3) JSON API + React (JavaScript, Vite).

## Structure

```
persPortf/
├── main.py            # Flask entry point (runs the API)
├── requirements.txt   # Python dependencies
├── backend/           # Flask app factory, routes, and content
│   ├── app.py         # create_app() factory + CORS
│   ├── routes.py      # /api endpoints
│   └── data.py        # portfolio content (single source)
└── frontend/          # React app (Vite)
    └── src/
        ├── theme.js       # color palette (single source)
        ├── api.js         # fetch client
        ├── App.jsx        # composes the sections
        └── components/    # Navbar, Hero, About, Projects, Contact, Footer
```

## Palette

- Taupe `#483C32`
- Wheat `#F5DEB3`

## Run the backend

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py            # serves http://127.0.0.1:5000
```

API endpoints: `GET /api/health`, `GET /api/profile`, `GET /api/projects`.

On macOS, port 5000 is often taken by the AirPlay Receiver. Either disable it in
System Settings, or run on another port: `PORT=5001 python main.py` (update the
`vite.config.js` proxy target to match).

## Run the frontend

```bash
cd frontend
npm install
npm run dev               # serves http://localhost:5173
```

The Vite dev server proxies `/api` to the Flask backend, so run both together.
