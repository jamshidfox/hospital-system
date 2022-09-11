import { Routes, Route, Navigate, NotFoundRoute } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { getCookie } from '../utils/cookie'
import Empty from '../components/EmptyQuery'
import HomeLayout from '../components/Layout/BaseLayout'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NotFoundContainer = styled(HomeLayout)`
  min-height: 90vh;
`

const RouteWithSupRoutes = ({ routes }) => {
  const tokenExists = getCookie('token')
  return (
    <Container>
      {!tokenExists && <Navigate to="/login" replace={true} />}
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={true}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
        <Route
          path="*"
          element={
            <NotFoundContainer>
              <Empty />
            </NotFoundContainer>
          }
        />
      </Routes>
    </Container>
  )
}

export default RouteWithSupRoutes
