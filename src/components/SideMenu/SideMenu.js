import React from 'react'
import styled from 'styled-components'
import { storageData } from '../../utils/storage'
import { Menu as MenuIcon } from 'react-feather'
import Menu from './Menu'
import constants from './constants'

const Box = styled('div')`
  position: flex;
  top: 20px;
  left: 20px;
  bottom: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: calc(100vh);
  max-height: calc(100vh);
  width: ${({ theme, open }) => (open ? theme.width.sideMenu.open : theme.width.sideMenu.close)};
  min-width: ${({ theme, open }) =>
    open ? theme.width.sideMenu.open : theme.width.sideMenu.close};
  padding: 15px 0;
  background: #ffffff;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  transition: ${({ theme }) => theme.transition.primary};
`
const IconButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.primary};
  &:active {
    opacity: 0.7;
    transition: ${({ theme }) => theme.transition.primary};
  }
`
const MenuWrapper = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 5px;
`
const MenuButton = styled(IconButton)`
  padding: ${({ smart }) => (smart ? '7px 4px' : '7px 16px')};
  margin-left: ${({ smart }) => smart && '8px'};
  margin-right: ${({ smart }) => !smart && '3px'};
  & > svg {
    width: 35px;
    height: 35px;
  }
`
const Title = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  letter-spacing: 0.5px;
  margin-right: 5px;
  user-select: none;
  & > * {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h2 {
    font-size: ${({ withSubtitle }) => (withSubtitle ? '14px' : '18px')};
    line-height: ${({ withSubtitle }) => (withSubtitle ? '16px' : '20px')};
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
  }
  h3 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text.secondary};
  }
`
const MenuList = styled('div')`
  max-height: calc(100vh - 30px - 79px - 82px);
  overflow-y: scroll;
  transition: ${({ theme }) => theme.transition.primary};
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  &:hover {
    transition: ${({ theme }) => theme.transition.primary};
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.background.thumb};
    }
  }
`

const SideMenu = (props) => {
  const handleToggleMenu = () => {
    const value = !open

    setOpen(value)
    storageData('isOpenMenu').setValue(value)
  }
  const fullName = 'Jamshidbek Kobilov'
  const email = 'jamanu1910077@gmail.com'
  const username = 'tbyFox_01'
  const { open, setOpen } = props
  return (
    <Box open={open}>
      <div>
        <MenuWrapper>
          <MenuButton onClick={handleToggleMenu} smart={!open}>
            <MenuIcon style={{ verticalAlign: 'text-bottom' }} />
          </MenuButton>
          {open && (
            <Title withSubtitle={!!email}>
              <h2>{fullName}</h2>
              {username && <h3>{username}</h3>}
            </Title>
          )}
        </MenuWrapper>
        <MenuList></MenuList>
      </div>
    </Box>
  )
}
export default SideMenu
