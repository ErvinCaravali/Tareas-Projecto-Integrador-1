import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import { useFrame } from '@react-three/fiber';

export default function Sphere(props) {
    const object4 = useRef(null);
    const PATH4 = './assets/textures/sphere/';

    const propsTexture4 = {
        map: useTexture(PATH4 + 'rubber_tiles_diff_1k.jpg'),
        normalMap: useTexture(PATH4 + 'rubber_tiles_nor_gl_1k.jpg'),
        displacementMap: useTexture(PATH4 + 'rubber_tiles_disp_1k.jpg'),
        roughnessMap: useTexture(PATH4 + 'rubber_tiles_rough_1k.jpg'),
    };
    propsTexture4.map.repeat.set(4, 120);
    propsTexture4.map.wrapS = propsTexture4.map.wrapT = RepeatWrapping;

    propsTexture4.normalMap.repeat.set(4, 120);
    propsTexture4.normalMap.wrapS = propsTexture4.normalMap.wrapT = RepeatWrapping;

    propsTexture4.displacementMap.repeat.set(4, 120);
    propsTexture4.displacementMap.wrapS = propsTexture4.displacementMap.wrapT = RepeatWrapping;

    propsTexture4.roughnessMap.repeat.set(4, 120);
    propsTexture4.roughnessMap.wrapS = propsTexture4.roughnessMap.wrapT = RepeatWrapping;

    // Función para la animación de los objetos usando una función coseno
    useFrame(({ clock }, delta) => {
        // Movimiento coseno para el objeto 4
        object4.current.position.y = Math.cos(clock.getElapsedTime()); // Ajusta el factor multiplicador para cambiar la amplitud de la animación
        object4.current.position.y += 0.3 * delta;
    });

    return (
        <mesh ref={object4} position={[9, 0.4, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
            <coneGeometry />
            <meshStandardMaterial {...propsTexture4} />
        </mesh>
    );
}
