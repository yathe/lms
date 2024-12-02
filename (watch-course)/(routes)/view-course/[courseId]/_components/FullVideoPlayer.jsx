import { CheckCircle } from "lucide-react";
import React from "react";

const FullVideoPlayer = ({ activeChapter }) => {
  // Parse and fix the video URL if necessary
  const videoUrl = activeChapter?.videoid?.includes("https//")
    ? activeChapter.videoid.replace("https//", "https://")
    : activeChapter?.videoid;

  if (!activeChapter) {
    return <div style={styles.noChapter}>No chapter selected</div>;
  }

  return (
    <div style={styles.container}>
      {videoUrl ? (
        videoUrl.includes("youtube") ? (
          // If it's a YouTube URL, embed it
          <iframe
            width="1000"
            height="400"
            src={videoUrl.replace("watch?v=", "embed/")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={styles.videoPlayer}
          ></iframe>
        ) : (
          // For direct video URLs, use the HTML5 video player
          <>
            <video
              width="1000"
              height="400"
              key={activeChapter?.videoid}
              controls
              controlsList="nodownload"
              style={styles.videoPlayer}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={styles.chapterInfo}>
              <h2 style={styles.chapterName}>{activeChapter.name}</h2>
              <button style={styles.completeButton}>
                <CheckCircle style={styles.completeIcon} />
                <span>Mark as Completed</span>
              </button>
            </div>
          </>
        )
      ) : (
        <p style={styles.noVideo}>No video available</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  videoPlayer: {
    borderRadius: '10px',
    border: 'none',
  },
  chapterInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  chapterName: {
    fontSize: '24px',
    fontWeight: '500',
    margin: 0,
  },
  completeButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  completeIcon: {
    marginRight: '10px',
  },
  noChapter: {
    fontSize: '18px',
    color: '#888',
  },
  noVideo: {
    fontSize: '18px',
    color: '#888',
  },
};

export default FullVideoPlayer;
