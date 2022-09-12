import styled from 'styled-components'
import { Search } from 'react-feather'
import { Form } from 'reactstrap'

const SearchConatiner = styled('div')`
  display: flex;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  border-radius: 1.5rem;
  background-color: white;
`
const Input = styled('input')`
  display: flex;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`
const SearchIcon = styled(Search)`
  font-size: fit;
  color: black;
`
const SearchInput = ({ searchedValue, handleInputChange }) => {
  return (
    <SearchConatiner>
      <Input
        type="text"
        id="search-input"
        value={searchedValue}
        onChange={(e) => handleInputChange(e)}
        placeholder="Search for a movie, tv show,person..."
      />
      <SearchIcon />
    </SearchConatiner>
  )
}
export default SearchInput
