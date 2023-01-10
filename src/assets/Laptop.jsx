import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/laptop.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 50.45, -8.89]} rotation={[-1.94, 0, -Math.PI / 2]} scale={100}>
        <mesh geometry={nodes.Cube_Auto_04_0.geometry} material={materials.Auto_04} />
        <mesh geometry={nodes.Cube_Screen_0.geometry} material={materials.Screen} />
      </group>
      <mesh geometry={nodes.Cube004_Auto_01_0.geometry} material={materials.Auto_01} position={[0, -25.59, 7.31]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube007_Auto_01_0.geometry} material={materials.Auto_01} position={[0, -40.16, 75.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Keys_Auto_02_0.geometry} material={materials.Auto_02} position={[-72.23, -27.68, 35.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube012_Auto_02_0.geometry} material={materials.Auto_02} position={[-91.07, -25.46, 22.76]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube018_Auto_02_0.geometry} material={materials.Auto_02} position={[-60.21, -21.79, -5.75]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube019_Auto_02_0.geometry} material={materials.Auto_02} position={[-24.73, -21.79, -5.75]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube013_Auto_02_0.geometry} material={materials.Auto_02} position={[-91.35, -28.7, 4.17]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube006_Auto_03_0.geometry} material={materials.Auto_03} position={[17.37, -25.59, 7.31]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube005_Auto_03_0.geometry} material={materials.Auto_03} position={[0, -25.59, 7.31]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube017_Auto_03_0.geometry} material={materials.Auto_03} position={[100.65, -28.85, 25.18]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube001_Auto_03_0.geometry} material={materials.Auto_03} position={[0, 50.45, -8.89]} rotation={[-1.94, 0, 0]} scale={100} />
      <mesh geometry={nodes.BezierCurve001_Auto_03_0.geometry} material={materials.Auto_03} position={[-74.93, -17.34, -70.69]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.BezierCurve_Auto_03_0.geometry} material={materials.Auto_03} position={[-74.93, -19.17, -70.69]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.BezierCurve002_Auto_03_0.geometry} material={materials.Auto_03} position={[-74.93, -20.54, -70.69]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube015_Auto_03_0.geometry} material={materials.Auto_03} position={[-182.23, -22.98, 7.31]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube014_Auto_03_0.geometry} material={materials.Auto_03} position={[-182.23, -22.98, 7.31]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cylinder_Auto_03_0.geometry} material={materials.Auto_03} position={[7.52, 0.85, 2.93]} rotation={[-2.05, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cylinder002_Auto_03_0.geometry} material={materials.Auto_03} position={[-3.49, 0.85, 2.93]} rotation={[-2.05, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube016_Auto_03_0.geometry} material={materials.Auto_03} position={[-0.6, -11.89, -52.54]} rotation={[2.55, 0.01, -1.58]} scale={100} />
      <mesh geometry={nodes.Cube002_Auto_04_0.geometry} material={materials.Auto_04} position={[0, 50.45, -8.89]} rotation={[-1.94, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube003_Auto_04_0.geometry} material={materials.Auto_04} position={[0, 50.45, -8.89]} rotation={[-1.94, 0, -Math.PI / 2]} scale={100} />
      <mesh geometry={nodes.Cube020_Auto_04_0.geometry} material={materials.Auto_04} position={[0, 50.45, -8.89]} rotation={[-1.94, 0, -Math.PI / 2]} scale={100} />
    </group>
  )
}

useGLTF.preload('/laptop.glb')
