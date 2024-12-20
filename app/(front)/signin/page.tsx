import React from 'react'
import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Sign In',
}

const page = () => {
  return <Form />
}

export default page
