import React from 'react'

// react-redux imports
import {useSelector} from 'react-redux';

export default function HomePage(props) {
    const name = useSelector((state)=>state.homepageState.username)
  return (
    <div>Hello, {name}!</div>
  )
}
