import { OrbitControls } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import  World  from './world/World.jsx'
import  Box  from './box/Box.jsx';
import  Cone from './cone/Cone.jsx'
import  Sphere from './sphere/Sphere.jsx'
import './styles.css';
const Experience = () => {
    const object1 = useRef(null);

 
    
    return (
        <>
            <ambientLight />
            <directionalLight position={[10, 10, 5]} />
            <OrbitControls />
            <World/>
            <Box/>
            <Cone/>
            <Sphere/>
        </>
    )
}

export default Experience;