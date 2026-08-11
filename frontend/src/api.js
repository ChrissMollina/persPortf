// API client abstraction over fetch

// Base path proxied to the Flask backend
const apiBase = "/api";

// Perform a GET request and parse JSON
async function getJson(path) {
  // Call the endpoint and await the response
  const response = await fetch(`${apiBase}${path}`);

  // Guard against non-2xx responses
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

// Fetch the profile / about content
export function fetchProfile() {
  return getJson("/profile");
}

// Fetch the list of portfolio projects
export function fetchProjects() {
  return getJson("/projects");
}

// Fetch the featured video showcase list
export function fetchVideos() {
  return getJson("/videos");
}
