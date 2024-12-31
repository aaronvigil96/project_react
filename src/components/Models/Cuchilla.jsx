import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cuchilla(props) {
  const { nodes, materials } = useGLTF('models/cuchilla.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0.03, -0.019]}
        scale={0.136}
      />
    </group>
  )
}

useGLTF.preload('models/cuchilla.glb')