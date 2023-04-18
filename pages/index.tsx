import React from 'react'
import { DefaultLayout } from 'layouts'
import { Home } from 'app/blog-home/home'

export default function home() {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  )
}
