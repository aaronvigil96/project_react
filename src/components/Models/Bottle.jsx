import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bottle(props) {
  const { nodes, materials } = useGLTF('models/bottle.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.001']}
        position={[0, 0.108, 0]}
        scale={1}
      />
    </group>
  )
}

useGLTF.preload('models/bottle.glb')