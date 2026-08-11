// Root component that composes all sections
import { useEffect, useState } from "react";

import { fetchProfile, fetchProjects, fetchVideos } from "./api.js";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import VideoShowcase from "./components/VideoShowcase.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Profile, project, and video state from the API
  const [profileState, setProfileState] = useState(null);
  const [projectState, setProjectState] = useState([]);
  const [videoState, setVideoState] = useState([]);

  // Load portfolio content on first render
  useEffect(() => {
    fetchProfile().then(setProfileState).catch(console.error);
    fetchProjects().then(setProjectState).catch(console.error);
    fetchVideos().then(setVideoState).catch(console.error);
  }, []);

  // Wait for the profile before rendering sections
  if (!profileState) {
    return <p className="container loading">Loading…</p>;
  }

  return (
    <div className="page">
      <Hero profile={profileState} />
      <main className="content">
        <About profile={profileState} />
        <VideoShowcase videos={videoState} />
        <Projects projects={projectState} />
        <Contact profile={profileState} />
      </main>
      <Footer />
    </div>
  );
}
