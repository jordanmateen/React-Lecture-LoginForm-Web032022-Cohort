import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';

//styles
const GreetingWrapper = styled.div`
color: white;
`

const Greeting = styled.h1``

function HomePage(props) {
    const { name } = props 
  return (
    <GreetingWrapper>
      <Greeting>
        Hello, {name}!
      </Greeting>
    </GreetingWrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  const name = state.homepage.username // ownProps.getUserName(state);
  return {
    name
  }
} 
export default connect(mapStateToProps, null)(HomePage)