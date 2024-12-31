
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Mesa(props) {
  const { nodes, materials } = useGLTF('models/mesa.glb')
  const texture = useTexture('texture/wood.jpg');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.001']}
        position={[2.028, 0, 0]}
      >
        <meshStandardMaterial map={texture}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('models/mesa.glb')
