import React from 'react'
import { Card, BlankState } from 'components'
import { userCurrentUser } from 'lib'
import Link from 'next/link'
import Avatar from 'boring-avatars'

//context
import { usePosts } from 'context/SearchProvider'

const MyAccount = () => {
  const { state } = usePosts()
  const response = userCurrentUser()

  const filteredData = state.posts.filter(
    (el) => el.user_id === response?.user.id
  )

  return (
    <main className='myaccount-container'>
      <h1 className='myaccount-title'>Your Post</h1>

      <aside className='myaccount-posts'>
        <section className='myaccount-card'>
          {state.posts.length > 0 ? (
            (filteredData || []).map((el) => <Card {...el} key={el.id} />)
          ) : (
            <BlankState message="Uh oh! You haven't posted anything." />
          )}
        </section>
        <section className='myaccount-profile'>
          <img className='profile-backdrop' src='/images/Pattern.png' alt='' />
          <div className='myaccount-info'>
            {response && (
              <>
                <div className='avatar-profile'>
                  <Avatar
                    size={80}
                    name={response?.user.username}
                    variant='beam'
                    colors={['#EF746F']}
                  />
                  <h1 className='myaccount-name'>{response?.user.email}</h1>
                </div>

                <Link href='/createPost' className='btn-profile-post'>
                  <button
                    type='button'
                    className='reset-button btn-primary-default'
                  >
                    Create Post
                  </button>
                </Link>
              </>
            )}
          </div>
        </section>
      </aside>
    </main>
  )
}

export { MyAccount }
