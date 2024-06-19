import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect } from "react";

const GltfModel = ({ modelPath, scale = 40, position = [0, 0, -100], rotation = [0, Math.PI*2, 0],onLoaded }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);
  const [rotating, setRotating] = useState(false);

  useFrame(({ mouse }) => {
    if (hovered || rotating) {
      const rotationSpeed = 0.053;
      const targetRotationY = Math.PI - (mouse.x * Math.PI) / 4; 
      ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * rotationSpeed;
    }
  });

  useEffect(()=>{
    if(gltf){
      onLoaded();
    }
  },[gltf])

  const handleMouseDown = () => {
    setRotating(true);
  };

  const handleMouseUp = () => {
    setRotating(false);
  };

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={scale}
        rotation={rotation} 
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onPointerDown={handleMouseDown}
        onPointerUp={handleMouseUp}
        onPointerCancel={handleMouseUp}
      />
    </>
  );
};

export default GltfModel;
