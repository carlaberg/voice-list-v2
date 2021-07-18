import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { USER, UPDATE_USER } from '../../queries';
import { Heading1 } from '../ListListing/styles';
import { Form } from './styles';
import debounce from 'just-debounce-it'
import Input from '../Input';

interface Commands {
  confirm: string;
  add: string;
  remove: string;
}

const Settings = () => {
  const { error: userError, data: userData, loading: userLoading, } = useQuery(USER)
  const [updateUser, { error: updateUserError, data: updateUserData }] = useMutation(UPDATE_USER)
  
  const [commands, setCommands] = useState<Commands>()

  const debouncedUpdate = useCallback(debounce((key, value, commands) => {
    updateUser({
      variables: {
        input: {
          commands: {
            ...commands,
            [key]: value
          }
        }
      }
    })
  }, 500), [])
  

  useEffect(() => {
    if (!userData) return
    const { __typename, ...rest } = userData?.user?.commands || {}
    setCommands(rest)
  }, [userData])


  if (userLoading) return <div>loading</div>
  if (userError) return <div>error</div>
  if (!userData) return <div>no data</div>

  return (
    <>
      <Heading1>Voice commands</Heading1>
      <Form>
        <Input
          label="Confirm"
          allowIndicators={false}
          onChange={({ target }) => {
            setCommands({
              ...commands,
              confirm: target.value
            })
            debouncedUpdate('confirm', target.value, commands)
          }}
          value={commands?.confirm}
        />
        <Input
          label="Add"
          allowIndicators={false}
          onChange={({ target }) => {
            setCommands({
              ...commands,
              add: target.value
            })
            debouncedUpdate('add', target.value, commands)
          }}
          value={commands?.add}
        />
        <Input
          label="Remove"
          allowIndicators={false}
          onChange={({ target }) => {
            setCommands({
              ...commands,
              remove: target.value
            })
            debouncedUpdate('remove', target.value, commands)
          }}
          value={commands?.remove}
        />
      </Form>
    </>
  )
}

export default Settings