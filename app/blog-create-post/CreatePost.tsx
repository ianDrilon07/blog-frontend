import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { tagsSamples } from 'utils'
import { InputFiled, RichText, PostTags } from 'components'
import { PostTypes } from 'lib/types'
import { usePost } from 'lib'

const CreatePost = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    reset,
    watch
  } = useForm<PostTypes>()
  const { savePosts } = usePost()

  const editorContent = watch('body')

  const handleRichText = (editorState: string) => {
    setValue('body', editorState)
  }

  useEffect(() => {
    register('body', { required: 'Required Field' })
  }, [register])

  const onSubmit = (data: PostTypes) => {
    const config = {
      ...data,
      status: 'POST'
    }

    //console.log(config)

    savePosts(config.title, config.body, config.tag, config.status)
    reset()
  }

  return (
    <div className='post-container'>
      <header>
        <h1>Create Post</h1>
      </header>
      <form className='post-content' onSubmit={handleSubmit(onSubmit)}>
        <section className='post-form-input'>
          <div className='input-label-container'>
            <InputFiled
              label='Title'
              type='text'
              errorMessage={errors?.title?.message}
              rest={{
                ...register('title', {
                  required: 'Required Field'
                })
              }}
            />
          </div>

          <div className='input-label-container'>
            <RichText
              title='Body Text'
              editorContent={editorContent}
              handleRichText={handleRichText}
            />
          </div>

          <div className='input-label-container'>
            <PostTags
              title='Tags'
              errorMessage={errors?.tag?.message}
              tagsSamples={tagsSamples}
              rest={{
                ...register('tag', {
                  required: 'Required Field'
                })
              }}
            />
          </div>
        </section>
        <section className='form-btn'>
          <button type='button' className='btn-secondary-default'>
            Save draft
          </button>
          <button type='submit' className='reset-button btn-primary-default'>
            Post
          </button>
        </section>
      </form>
    </div>
  )
}

export { CreatePost }
