import React, { Fragment } from 'react'
import { Search } from 'react-feather'

interface inputFieldTypes {
  label?: string
  type: string
  errorMessage?: string | undefined
  placeholder?: string
  rest?: object
  style?: string
  isIcon?: boolean
}

const InputFiled: React.FC<inputFieldTypes> = (props): JSX.Element => {
  const { label, errorMessage, placeholder, type, rest, style, isIcon } = props

  return (
    <Fragment>
      <label className='label-style'>{label}</label>
      <div className='input-container-style'>
        {isIcon && <Search color='#77787B' />}
        <input
          type={type}
          className={` ${style} reset-input input-style`}
          aria-label='username'
          placeholder={placeholder}
          {...rest}
        />
      </div>
      {errorMessage && <p className='error-style'>{errorMessage}</p>}
    </Fragment>
  )
}

export default InputFiled
