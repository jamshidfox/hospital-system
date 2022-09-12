import React from 'react'
import styled from 'styled-components'
// import Components
import Dashboard from '../components/Dashboard'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
`

const LandingPageContainer = () => {
  return (
    <Container>
      <Dashboard />
    </Container>
  )
}

export default LandingPageContainer
