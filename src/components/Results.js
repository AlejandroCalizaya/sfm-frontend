import '../css/Results.css'

import React, { useRef, useEffect } from 'react'

const Results = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
        }
    }, []);

    return (
        <div className="Results">
            <table className="results-table">
                <thead>
                    <tr>
                        <th>Video del escaneo del objeto</th>
                        <th>Imagen de la malla generada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <video
                                ref={videoRef}
                                src="/videos/triceratops.mp4"
                                alt="Triceratops model video"
                                controls
                                loop
                                muted
                                autoPlay
                            />
                        </td>
                        <td>
                            <img
                                src="/photos/triceratops.png"
                                alt="Mesh of Triceratops"
                                className="results-image"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <video
                                ref={videoRef}
                                src="/videos/utechie.mp4"
                                alt="Utechie model video"
                                controls
                                loop
                                muted
                                autoPlay
                            />
                        </td>
                        <td>
                            <img
                                src="/photos/utechie.png"
                                alt="Mesh of Utechie"
                                className="results-image"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Results;