import React from 'react'
import { formatTypes } from 'lib/types'
import { formats } from 'utils/ToolbarOptions'

const renderOptions: React.FC<formatTypes> = (formatData) => {
  const { className, options } = formatData
  return (
    <select className={className}>
      <option selected={true}></option>
      {(options || []).map((value) => {
        return <option value={value}></option>
      })}
    </select>
  )
}

const renderSingle: React.FC<formatTypes> = (formatData) => {
  const { className, value } = formatData

  console.log(formatData)

  return <button className={className} value={value}></button>
}

const CustomToolbar = () => (
  <div id='toolbar'>
    {formats.map((classes) => {
      return (
        <span className='ql-formats ql-align'>
          {classes.map((formatData) => {
            return formatData.options
              ? renderOptions(formatData)
              : renderSingle(formatData)
          })}
        </span>
      )
    })}
  </div>
)
export default CustomToolbar
