import React from 'react'

interface inputFieldTypes {
  label: string
  type: string
  errorMessage: string | undefined
  rest: object
}

const InputFiled: React.FC<inputFieldTypes> = (props): JSX.Element => {
  const { label, errorMessage, type, rest } = props

  return (
    <div className='input-label-container'>
      <label className='label-style'>{label}</label>
      <input
        type={type}
        className='reset-input input-style'
        aria-label='username'
        {...rest}
      />
      {errorMessage && <p className='error-style'>{errorMessage}</p>}
    </div>
  )
}

export default InputFiled
