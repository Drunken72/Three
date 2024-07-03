// components/Tools.js
'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';

// Dynamically import the Sphere component
const Sphere = dynamic(() => import('./Sphere'), { ssr: false });

const Tools = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Return null on the server-side
    }

    return (
        <div>
            This is tools where I keep spheres
            <Canvas style={{ height: '500px', width: '500px', }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Sphere />
            </Canvas>
        </div>
    );
};

export default Tools;
