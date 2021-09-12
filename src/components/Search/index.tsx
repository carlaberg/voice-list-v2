import React, { useState, ReactNode, ReactElement } from 'react'
import Input from '../Input'
import {
  Wrapper,
  ResultList
} from './styles'

interface SearchProps {
  children?: ReactElement | ReactNode;
}

interface SearchBarProps {
  placeholder?: string;
  onQueryChange?: (newQuery) => void;
  isQueryValid?: boolean; 
}

const Search = ({ children }: SearchProps) => {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const SearchBar = ({ placeholder, onQueryChange, isQueryValid }: SearchBarProps) => {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    onQueryChange(e.target.value);
  }

  return (
      <Input
        placeholder={placeholder}
        value={query} 
        onChange={handleQueryChange}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        isFocused={active}
        valid={isQueryValid}
      />
  )
}

const SearchResults = ({children}) => {
  return (
    <ResultList>
      {children}
    </ResultList>
  )
}

Search.SearchBar = SearchBar;

Search.Results = SearchResults;

export default Search