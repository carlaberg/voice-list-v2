import React, { useState, useEffect } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
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
import UPDATE_LIST from '../../../queries/updateList'
import USER_LISTS from '../../../queries/lists'

interface CollaboratorsSettingsProps {
  list?: any;
}

const Collaborators = ({ list }: CollaboratorsSettingsProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const [findUsers, {
    error: findUsersError,
    loading: findUsersLoading,
    data: findUsersData
  }] = useLazyQuery(FIND_USERS)

  const [updateList, {
    error: updateListError,
    loading: updateListLoading,
    data: updateListData
  }] = useMutation(UPDATE_LIST, {
    refetchQueries: ['List']
  })

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

    return (
      <Wrapper>
        <StyledCard>
          <SettingsGroupTitle>Collaborators</SettingsGroupTitle>
          <Divider />
          <CollaboratorGrid>
          {list.collaborators.map((collaborator) => {
            return (
              <>
                <ProfileImage initials={collaborator.firstname.charAt(0)+collaborator.lastname.charAt(0)}/>
                <CollaboratorName>{collaborator.firstname} {collaborator.lastname}</CollaboratorName> 
                <Trash onClick={() => {
                  updateList({
                    variables: {
                      id: list._id,
                      input: {
                        collaborators: [
                          ...list.collaborators.map((user) => user._id).filter((userId) => userId != collaborator._id)
                        ]
                      }
                    }
                  })                  
                }}/>
              </>
            )
          })}
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
            {findUsersLoading && 'searching...'}
            {findUsersData && findUsersData.findUsers.map((user) => {
                  return (
                    <CollaboratorGrid key={user._id} onClick={() => {
                      updateList({
                        variables: {
                          id: list._id,
                          input: {
                            collaborators: [
                              ...list.collaborators.map((user) => user._id),
                              user._id
                            ]
                          }
                        }
                      })
                    }}>
                      <ProfileImage initials={user.firstname.charAt(0)+user.lastname.charAt(0)}/>
                      <CollaboratorName>{user.firstname} {user.lastname}</CollaboratorName> 
                  </CollaboratorGrid>
                  )
                })}

            </Search.Results> 
          </Search>
      </StyledCard>        
    </Wrapper>
    )
}

export default Collaborators