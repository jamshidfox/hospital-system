import styled from 'styled-components'
import FirstContent from './components/FirstContainer/FirstContainer'
import SecondContent from './components/SecondContainer/SecondContainer'

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 0px 1rem;
  width: 100%;
  height: 60px;
`
const Navbar = () => {
  return (
    <Container>
      <FirstContent />
      <SecondContent />
    </Container>
  )
}

export default Navbar
