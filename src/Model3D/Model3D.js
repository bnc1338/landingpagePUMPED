import React, { useState, useEffect } from "react";
import "./Model3D.css";
import ModelViewer from "./ModelViewer";
import modelFerfi from "./PUMPEDiPHONE15PRO_ferfi.glb";
import modelNo from "./PUMPEDiPHONE15PRO_no.glb";

const Model3D = ({onLoaded}) => {
  const [modelPath, setModelPath] = useState("");

  useEffect(() => {
    // Function to randomly select a model path
    const getRandomModelPath = () => {
      const models = [
        modelFerfi,
        modelNo
      ];
      return models[Math.floor(Math.random() * models.length)];
    };

    // Set the initial model path on page load
    setModelPath(getRandomModelPath());
  }, []); // Empty dependency array to run this effect only once on page load

  return (
    <div className="Model3D unselectable">
      <ModelViewer scale="1" modelPath={modelPath} onLoaded={onLoaded} />
    </div>
  );
};

export default Model3D;
