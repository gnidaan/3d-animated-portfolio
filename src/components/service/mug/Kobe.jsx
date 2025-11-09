

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function KobeModel(props) {
  const { nodes, materials } = useGLTF('/kobe.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
        <lineSegments geometry={nodes.Object_2.geometry} material={materials.M_MED_ASN_Mansu_Head_01} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.M_MED_ASN_Mansu_Head_01} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.M_MED_KpopFashion_Body} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.M_MED_Kpop_Fashion_Hat} />
      </group>
    </group>
  )
}

useGLTF.preload('/kobe.glb')
