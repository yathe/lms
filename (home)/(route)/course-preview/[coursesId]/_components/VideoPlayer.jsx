import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl }) => {
    const extractVideoId = (url) => {
        if (!url) {
            return null;
        }
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const videoId = extractVideoId(videoUrl);

    return (
        <div className='video-player'>
            <h2 className='video-title'>Course Preview</h2>
            {videoId ? (
                <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video player"
                ></iframe>
            ) : (
                <p>Error loading video. Please check the video URL or format.</p>
            )}
        </div>
    );
};

export default VideoPlayer;
