import React, { useState } from 'react'
import styled from 'styled-components'
// import contents
import SideBar from '../SideMenu/SideMenu'
import { storageData } from '../../utils/storage'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
`

const BodyContent = styled('div')`
  display: flex;
  min-height: 60vh;
  width: 100%;
`

const BaseLayout = (props) => {
  const isOpenMenuStorage = storageData('isOpenMenu').getValue()
  const isOpenMenuInitial = isOpenMenuStorage === null || isOpenMenuStorage === true
  const [isOpenMenu, setIsOpenMenu] = useState(isOpenMenuInitial)

  const { children } = props
  return (
    <Container>
      <SideBar open={isOpenMenu} setOpen={setIsOpenMenu} />
      {/* <BodyContent>{children}</BodyContent> */}
    </Container>
  )
}
export default BaseLayout
