'use-client'
import React,{memo} from 'react'

import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import MobileModel from './Mobile'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'


const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>
      <CameraRig>
        <Backdrop/>
        <Center>
            <MobileModel/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default memo(CanvasModel)
