import React from 'react'
import styled from 'styled-components'
// react-redux imports
import {useSelector} from 'react-redux';

//styles
const GreetingWrapper = styled.div`
color: white;
`

const Greeting = styled.h1``

function HomePage() {
  const name = useSelector((state)=>state.homepage.username)
  return (
    <GreetingWrapper>
      <Greeting>
        Hello, {name}!
      </Greeting>
    </GreetingWrapper>
  )
}

export default HomePage