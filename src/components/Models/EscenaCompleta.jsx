import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function EscenaCompleta(props) {
  const { nodes, materials, cameras } = useGLTF('models/escena_completa.glb')
  console.log(cameras);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
      />
      <group position={[0, 0.841, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group position={[0, 0.798, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials['Material.011']}
        />
      </group>
      <group position={[0.329, 0.932, 0]} scale={[1, 0.567, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials['Material.009']}
        />
      </group>
      <group position={[0.329, 0.654, 0]} scale={[1, 0.567, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials['Material.010']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.001']}
        position={[0, 0.841, 0]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[5.184, 2.858, 5.807]}
        rotation={[-0.357, 0.708, 0.238]}
      />
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Material.006']}
        position={[0.756, 0.106, -0.464]}
        rotation={[0, -0.683, 0]}
        scale={0.181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Material.006']}
        position={[-0.339, 0.106, -0.464]}
        scale={0.181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['Material.007']}
        position={[0.69, 0.049, -0.02]}
        scale={0.366}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['Material.006']}
        position={[0.115, 0.106, -0.464]}
        scale={0.181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['Material.012']}
        position={[-0.8, 1, 0.449]}
        rotation={[1.438, 0.56, -1.723]}
        scale={[0.003, 0.001, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.013']}
        position={[-0.873, 0.959, 0.465]}
        rotation={[-Math.PI / 2, 0, 1.51]}
        scale={0.087}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.014']}
        position={[-0.281, 0.533, 0]}
        scale={0.044}
      />
    </group>
  )
}

useGLTF.preload('models/escena_completa.glb')