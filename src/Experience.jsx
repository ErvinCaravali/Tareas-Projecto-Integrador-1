import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import './styles.css';
import { OrbitControls } from "@react-three/drei";
import { PlaneGeometry, MeshLambertMaterial, MeshPhongMaterial, MeshMatcapMaterial } from 'three';

const Experience = () => {
  // Refs para los objetos que queremos animar
  const object1 = useRef();
  const object2 = useRef();
  const object3 = useRef();

  // Función para la animación de los objetos usando una función coseno
  useFrame((state) => {
    // Movimiento coseno para el objeto 1
    object1.current.position.y = Math.cos(state.clock.getElapsedTime()) * 50; // Ajusta el factor multiplicador para cambiar la amplitud de la animación

    // Movimiento coseno para el objeto 2 con un desfase en la fase
    object2.current.position.y = Math.cos(state.clock.getElapsedTime() + Math.PI) * 100;

    // Movimiento coseno para el objeto 3 con una frecuencia mayor
    object3.current.position.y = Math.cos(state.clock.getElapsedTime() * 2) * 150;
  });

  return (
    <>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} />

      {/* Objeto 1 */}
      <mesh ref={object1} position={[0, -50, 0]} receiveShadow>
        <planeGeometry args={[10, 100]} />
        <meshLambertMaterial color="yellow" />
      </mesh>

      {/* Objeto 2 */}
      <mesh ref={object2} position={[10, -100, 10]} receiveShadow>
        <planeGeometry args={[10, 100]} />
        <meshPhongMaterial color="gray" />
      </mesh>

      {/* Objeto 3 */}
      <mesh ref={object3} position={[20, -150, 20]} receiveShadow>
        <planeGeometry args={[10, 100]} />
        <meshMatcapMaterial color="blue" />
      </mesh>
      
      {/* Control de órbita */}
      <OrbitControls /> 
    </>
  );
};

export { Experience };
