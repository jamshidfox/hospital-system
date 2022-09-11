import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  background-image: url(${({theme}) => theme.login.background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`

const LoginLayout = (props) => {
  const { children } = props
  return <Container>{children}</Container>
}
export default LoginLayout
