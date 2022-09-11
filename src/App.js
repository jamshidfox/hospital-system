import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import RoutesWithSubRoutes from './components/RoutesWithSubRoutes'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

const Container = styled('div')`
  display: flex;
  background-color: ${({ theme }) => theme.body.background};
`

const App = ({ routes, store }) => {
  return (
    <Provider store={store}>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hospital System</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <RoutesWithSubRoutes routes={routes} />
        <ToastContainer />
      </Container>
    </Provider>
  )
}

export default App
