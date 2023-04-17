import React from 'react'

interface SignInProps {
  type: 'ADMIN' | 'USER'
}

export const SignIn: React.FC<SignInProps> = ({ type }) => {
  return <div>SignIn</div>
}
