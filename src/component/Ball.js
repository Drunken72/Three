'use client'

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import CanvasLoader from "./Loader";

const Ball = ({ imgUrl }) => {
    const [decal] = useTexture([imgUrl]);
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            {/* lighting */}
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            {/* ANCHOR size of object */}
            <mesh receiveShadow scale={1.75}>
                {/* <icosahedronGeometry args={[1, 1]} /> */}
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color='#fff8eb' // color
                    polygonOffset
                    polygonOffsetFactor={-5}
                // flatShading  // makes more pixalated
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                // flatShading // makes more pixalated
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* Controls to rotate sphere */}
                <OrbitControls enableZoom={false} enablePan={false} />
                <Ball imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;