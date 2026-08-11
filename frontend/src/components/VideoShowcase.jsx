// Self-hosted video player with a title selector
import { useState } from "react";

export default function VideoShowcase({ videos }) {
  // Index of the video currently loaded in the player
  const [activeIndex, setActiveIndex] = useState(0);

  // Render nothing until videos have loaded
  if (!videos.length) {
    return null;
  }

  const activeVideo = videos[activeIndex];

  return (
    <section id="videos">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">Featured Videos</h2>

        {/* Main video player, remounts on source change */}
        <video
          key={activeVideo.src}
          className="video-player"
          controls
          preload="metadata"
          src={activeVideo.src}
        />

        {/* Selector chips, one per video title */}
        {videos.length > 1 && (
          <ul className="video-selector">
            {videos.map((video, index) => (
              <li key={video.id}>
                <button
                  type="button"
                  className={
                    index === activeIndex
                      ? "video-chip is-active"
                      : "video-chip"
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  {video.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
