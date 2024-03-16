import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

export default function WorldObject1(props) {
    const { nodes, materials } = useGLTF("./assets/models/world/World.glb");
    const object1 = useRef(null);
    const PATH = './assets/textures/floor/';

    const propsTexture = {
        map: useTexture(PATH + 'lichen_rock_diff_1k.jpg'),
        normalMap: useTexture(PATH + 'lichen_rock_nor_gl_1k.jpg'),
        displacementMap: useTexture(PATH + 'lichen_rock_disp_1k.jpg'),
        roughnessMap: useTexture(PATH + 'lichen_rock_rough_1k.jpg'),
    };

    propsTexture.map.repeat.set(4, 120);
    propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping;

    propsTexture.normalMap.repeat.set(4, 120);
    propsTexture.normalMap.wrapS = propsTexture.normalMap.wrapT = RepeatWrapping;

    propsTexture.displacementMap.repeat.set(4, 120);
    propsTexture.displacementMap.wrapS = propsTexture.displacementMap.wrapT = RepeatWrapping;

    propsTexture.roughnessMap.repeat.set(4, 120);
    propsTexture.roughnessMap.wrapS = propsTexture.roughnessMap.wrapT = RepeatWrapping;

    return (
        <group ref={object1} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} >
            <mesh geometry={nodes.walls.geometry} material={materials.Material} />
            <mesh geometry={nodes.floor.geometry}>
                <meshStandardMaterial {...propsTexture} />
            </mesh>
        </group>
    );
}
