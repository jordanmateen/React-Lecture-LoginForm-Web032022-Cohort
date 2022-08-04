import React from 'react'
import styled from 'styled-components'

//styles

const GreetingWrapper = styled.div`
color: white;
`

const Greeting = styled.h1``

export default function HomePage(props) {
    const { name } = props 
  return (
    <GreetingWrapper>
      <Greeting>
        Hello, {name}!
      </Greeting>
      </GreetingWrapper>
  )
}
