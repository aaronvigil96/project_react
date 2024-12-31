import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chancho(props) {
  const { nodes, materials } = useGLTF('models/chancho.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
        position={[0.004, 0.346, 0.185]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.325}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['Material.002']}
        position={[0.079, 0.499, 0.452]}
        rotation={[1.001, -0.08, -0.275]}
        scale={[0.011, 0.005, 0.021]}
      />
    </group>
  )
}

useGLTF.preload('models/chancho.glb')