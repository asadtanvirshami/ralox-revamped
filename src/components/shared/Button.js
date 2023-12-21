import React from 'react'
import { Button } from '@nextui-org/react'

const ButtonPrimary = ({title, size, variant, color}) => {
  return (
    <Button size={size} variant={variant} color={color}>
    {title}
  </Button>
  )
}

export default ButtonPrimary