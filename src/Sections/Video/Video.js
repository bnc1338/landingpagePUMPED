import './Video.css';
import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

function Video() {
    const videoId = 'rn0AtmKN8lk'; // Your YouTube video ID
    const [player, setPlayer] = useState(null);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // This function is called when the player is ready
    const onReady = (event) => {
        setPlayer(event.target);
        event.target.mute();
    };

    // Function to unmute the video
    const unmuteVideo = () => {
        if (player) {
            player.unMute();
            setIsMuted(false); // Hide the button after unmuting
        }
    };

    const opts = {
        height: screenWidth>400 ? screenWidth > 700 ? screenWidth >920 ? '500' : '386' : '282' : '182',
        width: screenWidth>400 ? screenWidth > 700 ? screenWidth >920 ? '888' : '686' : '500' : '300',
        playerVars: {
            autoplay: 0, // Don't autoplay initially
    controls: 0, // Show player controls    l f   
            modestbranding: 0, // Remove YouTube logo
            showinfo: 0,            
            loop: 1, // Enable loopingjjjjhhhyyyttthhhjjjjjj,,,,tfggfdsfg
            playlist: videoId, // To make loop work, set the playlist to the video ID
        },
    };   kkk                            

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        player?.playVideo(); // Play video when in view
                    } else {
                        player?.pauseVideo(); // Pause video when out of view
                    }
                });
            },
            {
                threshold: 0.5, // Video must be at least 50% visible
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [player]);

    return (
        <div className='Video' ref={videoRef}>
            <div className='video-inner'>
                <YouTube videoId={videoId} opts={opts} onReady={onReady} />
                {isMuted && (
                    <button className="unmute-button" onClick={unmuteVideo}>
                        Click to Unmute
                    </button>
                )}
            </div>
        </div>
    );
}

export default Video;
