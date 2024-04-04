import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import { useFrame } from '@react-three/fiber';

export default function Cone(props) {
    const object3 = useRef(null);
    const PATH3 = './assets/textures/cone/';

    const propsTexture3 = {
        map: useTexture(PATH3 + 'concrete_layers_02_diff_1k.jpg'),
        normalMap: useTexture(PATH3 + 'concrete_layers_02_nor_gl_1k.jpg'),
        displacementMap: useTexture(PATH3 + 'concrete_layers_02_disp_1k.jpg'),
        roughnessMap: useTexture(PATH3 + 'concrete_layers_02_rough_1k.jpg'),
    };
    propsTexture3.map.repeat.set(4, 120);
    propsTexture3.map.wrapS = propsTexture3.map.wrapT = RepeatWrapping;

    propsTexture3.normalMap.repeat.set(4, 120);
    propsTexture3.normalMap.wrapS = propsTexture3.normalMap.wrapT = RepeatWrapping;

    propsTexture3.displacementMap.repeat.set(4, 120);
    propsTexture3.displacementMap.wrapS = propsTexture3.displacementMap.wrapT = RepeatWrapping;

    propsTexture3.roughnessMap.repeat.set(4, 120);
    propsTexture3.roughnessMap.wrapS = propsTexture3.roughnessMap.wrapT = RepeatWrapping;

    // Función para la animación de los objetos usando una función coseno
    useFrame(({ clock }, delta) => {
        // Movimiento coseno para el objeto 3
        object3.current.position.y = Math.cos(clock.getElapsedTime()); // Ajusta el factor multiplicador para cambiar la amplitud de la animación
        object3.current.position.y += 0.3 * delta;
    });

    return (
        <mesh ref={object3} position={[-7, 0.4, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
            <sphereGeometry />
            <meshStandardMaterial {...propsTexture3} />
        </mesh>
    );
}
