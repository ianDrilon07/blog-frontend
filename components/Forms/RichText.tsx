import React, { useMemo, Fragment } from 'react'
import dynamic from 'next/dynamic'
import { reactQuillFormats } from 'utils/ToolbarOptions'

interface RichTextTypes {
  editorContent: string
  handleRichText: (editorContent: string) => void
  title: string
}

const RichText: React.FC<RichTextTypes> = ({
  editorContent,
  handleRichText,
  title
}) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  )

  return (
    <Fragment>
      <label className='label-style'>{title}</label>

      <ReactQuill
        theme='bubble'
        value={editorContent}
        onChange={handleRichText}
        modules={{ toolbar: false }}
        formats={reactQuillFormats}
      />
    </Fragment>
  )
}

export default RichText
