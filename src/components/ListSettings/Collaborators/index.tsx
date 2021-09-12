import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { 
    Wrapper,    
    Trash,
    SettingsGroupTitle,
    CollaboratorGrid,
    CollaboratorName
  } from './styles'

import { 
    Divider,
    StyledCard 
} from '../styles'
import ProfileImage from '../../ProfileImage'
import Search from '../../Search'
import validate from '../../../utils/validate'
import FIND_USERS from '../../../queries/findUsers'

const Collaborators = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [findUsers, {
    error: findUsersError,
    loading: findUsersLoading,
    data: findUsersData
  }] = useLazyQuery(FIND_USERS)

  const handleQueryChange = () => {
    if (validate.email(searchQuery)) {
      findUsers({
        variables: {
          input: {
            email: searchQuery
          }
        }
      })
    }    
  }

  useEffect(() => {
    handleQueryChange();
  }, [searchQuery])


    console.log(findUsersData)

    return (
      <Wrapper>
        <StyledCard>
          <SettingsGroupTitle>Collaborators</SettingsGroupTitle>
          <Divider />
          <CollaboratorGrid>
            <ProfileImage />
            <CollaboratorName>Carl Åberg</CollaboratorName>
            <Trash />
            <ProfileImage />
            <CollaboratorName>Carl Åberg</CollaboratorName>
            <Trash />
            <ProfileImage />
            <CollaboratorName>Carl Åberg</CollaboratorName>
            <Trash />
        </CollaboratorGrid>
      </StyledCard>
        <StyledCard>
          <SettingsGroupTitle>Add collaborator</SettingsGroupTitle>
          <Divider />
          <Search>
            <Search.SearchBar
              placeholder="Find by email"
              onQueryChange={(newQuery) => setSearchQuery(newQuery)}
              isQueryValid={validate.email(searchQuery)}
            />
            <Search.Results>
              <CollaboratorGrid>
                <ProfileImage />
                <CollaboratorName>Carl Åberg</CollaboratorName>
                <Trash />
                <ProfileImage />
                <CollaboratorName>Carl Åberg</CollaboratorName>
                <Trash />
                <ProfileImage />
                <CollaboratorName>Carl Åberg</CollaboratorName>
                <Trash />
              </CollaboratorGrid>
            </Search.Results>
          </Search>
      </StyledCard>        
    </Wrapper>
    )
}

export default Collaborators