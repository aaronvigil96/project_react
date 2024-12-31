import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Silla(props) {
  const { nodes, materials } = useGLTF('models/silla.glb')
  const texture = useTexture('texture/wood.jpg');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0.312, 0]}
      >
        <meshBasicMaterial map={texture}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('models/silla.glb')
