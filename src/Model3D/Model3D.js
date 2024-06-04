import React, { useState, useEffect } from "react";
import "./Model3D.css";
import ModelViewer from "./ModelViewer";

const Model3D = () => {
  const [modelPath, setModelPath] = useState("");

  useEffect(() => {
    // Function to randomly select a model path
    const getRandomModelPath = () => {
      const models = [
        "./PUMPEDiPHONE15PRO_ferfi.glb",
        "./PUMPEDiPHONE15PRO_no.glb"
      ];
      return models[Math.floor(Math.random() * models.length)];
    };

    // Set the initial model path on page load
    setModelPath(getRandomModelPath());
  }, []); // Empty dependency array to run this effect only once on page load

  return (
    <div className="Model3D">
      <ModelViewer scale="1" modelPath={modelPath} />
    </div>
  );
};

export default Model3D;
