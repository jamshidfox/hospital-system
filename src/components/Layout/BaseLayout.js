import React, { useState } from 'react'
import styled from 'styled-components'
import { storageData } from '../../utils/storage'
// import contents
import SideBar from '../SideMenu/SideMenu'
import Navbar from '../Navbar'

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100;
`

const BodyContent = styled('div')`
  display: flex;
  min-height: 60vh;
  margin-top: 2rem;
  width: 100%;
`
const Section = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  max-width: calc(
    100vw -
      (${({ theme, open }) => (open ? theme.width.sideMenu.open : theme.width.sideMenu.close)})
  );
  padding: 2rem;
  margin-left: 20px;
  transition: ${({ theme }) => theme.transition.primary};
`

const BaseLayout = (props) => {
  const isOpenMenuStorage = storageData('isOpenMenu').getValue()
  const isOpenMenuInitial = isOpenMenuStorage === null || isOpenMenuStorage === true
  const [isOpenMenu, setIsOpenMenu] = useState(isOpenMenuInitial)

  const { children } = props
  return (
    <Container>
      <SideBar open={isOpenMenu} setOpen={setIsOpenMenu} />
      <Section>
        <Navbar />
        <BodyContent>{children}</BodyContent>
      </Section>
    </Container>
  )
}
export default BaseLayout
