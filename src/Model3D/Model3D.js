import React, { useState, useEffect } from "react";
import { isIOS, isAndroid } from "react-device-detect";
import "./Model3D.css";
import ModelViewer from "./ModelViewer";
import samsungIphone from "./dupla.glb";

// import modelFerfi from "./PUMPEDiPHONE15PRO_ferfi.glb";
// import modelNo from "./PUMPEDiPHONE15PRO_no.glb";
// import samsungNo from "./samsungVilNo.glb";

const Model3D = ({ onLoaded }) => {
  // const [modelPath, setModelPath] = useState("");

  // useEffect(() => {
  //   // Function to randomly select a model path
  //   //const getRandomModelPath = () => {

  //   //   if (isIOS) {
  //   //     const models = [
  //   //       modelFerfi, modelNo
  //   //     ];
  //   //     return models[Math.floor(Math.random() * models.length)];
  //   //   }
  //   //   else if (isAndroid) {
  //   //     const models = [
  //   //       samsungNo, samsungFerfi
  //   //     ];
  //   //     return models[Math.floor(Math.random() * models.length)];
  //   //   }
  //   //   else {
  //   //     const models = [
  //   //       samsungNo, samsungFerfi, modelFerfi, modelNo
  //   //     ];
  //   //     return models[Math.floor(Math.random() * models.length)];
  //   //   }
  //   //};

  //   // Set the initial model path on page load
  //   // setModelPath(getRandomModelPath());
  // }, []); // Empty dependency array to run this effect only once on page load
  // if (modelPath === samsungNo || modelPath === samsungFerfi) {
  //   return (
  //     <div className="Model3D unselectable">
  //       <ModelViewer scale="90" modelPath={modelPath} position={[0, -6, 0]} onLoaded={onLoaded} />
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div className="Model3D unselectable">
  //       <ModelViewer scale="1" modelPath={modelPath} position={[0, -8, -10]} onLoaded={onLoaded} />
  //     </div>
  //   );
  // }
  return (
    <div className="Model3D unselectable">
      <ModelViewer scale="70" modelPath={samsungIphone} position={[0, -5, 0]} onLoaded={onLoaded} />
    </div>
  );
};

export default Model3D;
