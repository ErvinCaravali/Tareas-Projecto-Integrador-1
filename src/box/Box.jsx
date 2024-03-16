import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import { useFrame } from '@react-three/fiber';

export default function Box(props) {
    const object2 = useRef(null);
    const PATH2 = './assets/textures/box/';

    const propsTexture2 = {
        map: useTexture(PATH2 + 'concrete_pavement_diff_1k.jpg'),
        normalMap: useTexture(PATH2 + 'concrete_pavement_nor_gl_1k.jpg'),
        displacementMap: useTexture(PATH2 + 'concrete_pavement_disp_1k.jpg'),
        roughnessMap: useTexture(PATH2 + 'concrete_pavement_rough_1k.jpg'),
    };
    propsTexture2.map.repeat.set(4, 120);
    propsTexture2.map.wrapS = propsTexture2.map.wrapT = RepeatWrapping;

    propsTexture2.normalMap.repeat.set(4, 120);
    propsTexture2.normalMap.wrapS = propsTexture2.normalMap.wrapT = RepeatWrapping;

    propsTexture2.displacementMap.repeat.set(4, 120);
    propsTexture2.displacementMap.wrapS = propsTexture2.displacementMap.wrapT = RepeatWrapping;

    propsTexture2.roughnessMap.repeat.set(4, 120);
    propsTexture2.roughnessMap.wrapS = propsTexture2.roughnessMap.wrapT = RepeatWrapping;

    // Función para la animación de los objetos usando una función coseno
    useFrame(({ clock }, delta) => {
        // Movimiento coseno para el objeto 2
        object2.current.position.y = Math.cos(clock.getElapsedTime()); // Ajusta el factor multiplicador para cambiar la amplitud de la animación
        object2.current.position.y += 0.3 * delta;
    });

    return (
        <mesh ref={object2} position={[3, 0.4, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
            <boxGeometry />
            <meshStandardMaterial {...propsTexture2} />
        </mesh>
    );
}
