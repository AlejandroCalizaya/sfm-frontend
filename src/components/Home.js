import '../css/Home.css'

import React, { useRef, useEffect } from 'react'

const Home = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
        }
    }, []);

    return (
        <div className="Home">
            <div className="home-description">
                <h1>Descripción del proyecto</h1>
                <p>
                    El proyecto se basa en la creación de un modelo 3D de la persona u objeto que será escaneado previamente mediante un video.
                </p>
            </div>

            <div className="home-result">
                <h2>
                    Algunos resultados de este proyecto
                </h2>
                <p>
                    A continuación, podrá ver algunos de los resultados obtenidos de este proyecto:
                </p>
                <div className="home-result-example">
                    <img
                        src="/photos/triceratops.png"
                        alt="Mesh of Triceratops"
                    />

                    <video
                        ref={videoRef}
                        src="/videos/triceratops.mp4"
                        alt="Video of object scan"
                        controls
                        loop
                        muted
                        autoPlay
                    />
                </div>
            </div>
        </div>
    )
};

export default Home;