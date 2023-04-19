import React, { Fragment, KeyboardEvent } from 'react'
import { Search } from 'react-feather'

interface inputFieldTypes {
  label?: string
  type: string
  errorMessage?: string | undefined
  placeholder?: string
  rest?: object
  style?: string
  isIcon?: boolean
  onkeyPres?: (event: KeyboardEvent) => void
}

const InputFiled: React.FC<inputFieldTypes> = (props): JSX.Element => {
  const {
    label,
    errorMessage,
    placeholder,
    type,
    rest,
    style,
    isIcon,
    onkeyPres
  } = props

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
          onKeyDown={onkeyPres}
          {...rest}
        />
      </div>
      {errorMessage && <p className='error-style'>{errorMessage}</p>}
    </Fragment>
  )
}

export default InputFiled
