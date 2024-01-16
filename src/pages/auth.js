import React, { useState } from 'react'
import AccessAuth from '@/components/layout/Auth/Admin/Auth/'

const admin = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <AccessAuth isLogin={isLogin} setIsLogin={setIsLogin} />
  )
}

export default admin