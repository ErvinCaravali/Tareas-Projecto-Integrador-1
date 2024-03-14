import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import './styles.css';
import { OrbitControls, Plane } from "@react-three/drei";
import { PlaneGeometry, MeshLambertMaterial, MeshPhongMaterial, MeshMatcapMaterial } from 'three';

const Experience = () => {
  // Refs para los objetos que queremos animar
  const object1 = useRef(null);


  // Función para la animación de los objetos usando una función coseno
  useFrame(({clock},delta) => {
    // Movimiento coseno para el objeto 1
    object1.current.position.y = Math.cos(clock.getElapsedTime()); // Ajusta el factor multiplicador para cambiar la amplitud de la animación
    object1.current.position.x += 0.5*delta
 
  });

  return (
    <>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls /> 
      {/* Objeto 1 */}
      <mesh ref={object1} position={[1,1,1]} receiveShadow>
        <boxGeometry args={[100,10]} />
        <meshLambertMaterial color="grey" />
      </mesh>
    </>
  );
};

export { Experience };
