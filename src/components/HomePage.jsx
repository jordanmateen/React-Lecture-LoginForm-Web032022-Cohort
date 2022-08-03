import React from 'react'

export default function HomePage(props) {  // props: {name: ''}
    const { name } = props 
  return (
    <div>Hello, {name}!</div>
  )
}
