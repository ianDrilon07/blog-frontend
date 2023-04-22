import React from 'react'
import { InputFiled, RichText, PostTags } from 'components'
import { tagsSamples } from 'utils'
import { useForm } from 'react-hook-form'
import { editTypes } from 'lib/types'
import { usePost } from 'lib'

interface EditTypes {
  item: editTypes
}

const EditPost: React.FC<EditTypes> = ({ item }) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    watch
  } = useForm<editTypes>({
    defaultValues: {
      title: item.title,
      bodyText: item.body,
      tag: item.tag
    }
  })

  const { updatePost } = usePost()

  const editorContent = watch('bodyText')

  const handleRichText = (editorState: string) => {
    setValue('bodyText', editorState)
  }

  const onSubmit = (data: editTypes) => {
    updatePost(item.id, data.title, data.bodyText, data.tag, 'POST')
  }

  return (
    <div className='edit-container'>
      <header>
        <h1>Edit Post</h1>
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
            Update
          </button>
        </section>
      </form>
    </div>
  )
}

export { EditPost }
