import React,{memo} from 'react'

import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '@/valtio/store'

const MobileModel = () => {
    const snap = useSnapshot(state)
    const {nodes, materials} = useGLTF('../../../../public/images/3D/iphone_12_pro.glb')
    const globalGeometry = new THREE.BoxGeometry()
    const globalMaterial = new THREE.MeshBasicMaterial()
    const fullTexture = useTexture(snap.fullDecal)
  return (
    <>
        <mesh
        castShadow
        geometry={globalGeometry} material={globalMaterial}
        dispose={null}
        >
        </mesh>
      
    </>
  )
}

export default memo(MobileModel)
