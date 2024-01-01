import React,{memo} from 'react'
import { Button } from '@nextui-org/react'

const ButtonPrimary = ({title, size, variant, color, type}) => {
  return (
    <Button size={size} type={type} variant={variant} color={color}>
    {title}
  </Button>
  )
}

export default memo(ButtonPrimary)