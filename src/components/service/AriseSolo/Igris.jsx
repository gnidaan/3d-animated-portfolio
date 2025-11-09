
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function IgrisModel(props) {
  const { scene } = useGLTF('/igris.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, -1.571]}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.ShadowIgris_Body0} skeleton={nodes.Object_11.skeleton} />
          <skinnedMesh geometry={nodes.Object_13.geometry} material={materials.ShadowIgris_Body0} skeleton={nodes.Object_13.skeleton} />
          <skinnedMesh geometry={nodes.Object_15.geometry} material={materials.ShadowIgris_Body0} skeleton={nodes.Object_15.skeleton} />
          <mesh geometry={nodes.IgrisBoss_Weapon0_NLOD0_ShadowIgris_Body0_0.geometry} material={materials.ShadowIgris_Body0} position={[1.006, 0.303, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.IgrisBoss_Weapon0_NLOD1_ShadowIgris_Body0_0.geometry} material={materials.ShadowIgris_Body0} position={[1.006, 0.303, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/igris.glb')
