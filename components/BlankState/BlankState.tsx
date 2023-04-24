import React from 'react'
import Ghost from '../icon/Ghost'

const BlankState: React.FC<{ message: string }> = (props): JSX.Element => {
  return (
    <>
      <main className='blankstate-container'>
        {[1, 2, 3, 5, 6].map((el) => (
          <div className='empty-box' key={el} />
        ))}

        <div className='error-wrapper'>
          <Ghost />
          <p className='error-message'>{props.message}</p>
        </div>
      </main>
    </>
  )
}

export default BlankState
