import '../css/Manual.css';

import React from 'react';

const Manual = () => {
    return (
        <div className="Manual">
            <div className="manual-container">
                <h1>Reconstrucción 3D con Docker y Scripts de Python</h1>

                <p>
                    Para poder replicar el proceso de reconstrucción 3D de imágenes, se debe clonar nuestro &nbsp;
                    <a
                        href="https://github.com/Jerimy2021/StructureFromMotion?tab=readme-ov-file"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        repositorio
                    </a>
                    &nbsp; o, simplemente, puedes descargarlo haciendo click &nbsp;
                    <a
                        href="/StructureFromMotion.zip"
                        download="StructureFromMotion.zip"
                    >
                        aquí
                    </a>.
                </p>

                <h2>1. Crear la Imagen Docker</h2>
                <p>Para configurar el entorno con todas las librerías necesarias:</p>
                <pre>
                    docker run -it --rm \<br />
                    -v /ruta/a/imagenes:/app/images \<br />
                    my_project_image
                </pre>
                <p>
                    <strong>/ruta/a/imagenes:</strong> Ruta local de las imágenes para la reconstrucción.<br />
                    <strong>my_project_image:</strong> Nombre deseado para la imagen Docker.
                </p>

                <h2>2. Estructura del Proyecto</h2>
                <p>Las imágenes deben estar en una carpeta <code>images</code> dentro del proyecto. La estructura es la siguiente:</p>
                <pre>
                    app/<br />
                    &nbsp;&nbsp;images/<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;image1.jpg<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;image2.jpg<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;...<br />
                    &nbsp;&nbsp;OpenMVG.py<br />
                    &nbsp;&nbsp;OpenMVS.py<br />
                    &nbsp;&nbsp;Colmap.py<br />
                    &nbsp;&nbsp;app.py
                </pre>
                <p>Si el proyecto está en una subcarpeta <code>&lt;name_project&gt;</code>:</p>
                <pre>
                    app/<br />
                    &nbsp;&nbsp;&lt;name_project&gt;/<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;images/<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image1.jpg<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image2.jpg<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br />
                    &nbsp;&nbsp;OpenMVG.py<br />
                    &nbsp;&nbsp;OpenMVS.py<br />
                    &nbsp;&nbsp;Colmap.py<br />
                    &nbsp;&nbsp;app.py
                </pre>

                <h2>3. Ejecutar el Proyecto</h2>
                <p>Para procesar un proyecto con los scripts:</p>
                <pre>
                    docker run -it --rm \<br />
                    -v /ruta/a/proyecto:/app/&lt;name_project&gt; \<br />
                    my_project_image
                </pre>

                <h2>4. Ingresar al Contenedor</h2>
                <p>Crear un nuevo contenedor:</p>
                <pre>docker run -it my_project_image bash</pre>
                <p>Acceder a un contenedor existente:</p>
                <pre>docker exec -it &lt;container_id&gt; bash</pre>

                <h2>5. Procesar con Scripts Python</h2>
                <p>Generar malla 3D:</p>
                <pre>
                    curl -X POST http://localhost:5000/run_colmap \<br />
                    -H "Content-Type: application/json" \<br />
                    -d &#123;"project_path": "/app/&lt;name_project&gt;"&#125;
                </pre>
                <p>Generar nube de puntos:</p>
                <pre>
                    curl -X POST http://localhost:5000/run_openmvs \<br />
                    -H "Content-Type: application/json" \<br />
                    -d &#123;"project_path": "/app/&lt;name_project&gt;"&#125;
                </pre>

                <h2>6. Resultado</h2>
                <p>La malla 3D generada estará en la carpeta del proyecto en:</p>
                <pre>app/&lt;name_project&gt;/</pre>

                <h2>Notas Adicionales</h2>
                <p>
                    Usa <code>OpenMVG.py</code>, <code>OpenMVS.py</code> y <code>Colmap.py</code> para ejecutar los pasos específicos según las necesidades del proyecto.
                    El proceso está diseñado para automatizar la reconstrucción 3D a partir de imágenes, facilitando el uso de OpenMVG, OpenMVS y Colmap.
                </p>
            </div>
        </div>
    );
};

export default Manual;
