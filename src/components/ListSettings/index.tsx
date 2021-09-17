import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { 
  Wrapper,
  Header,
  Title,
  Divider,
  Grid,
  Main,
  SidePanel
} from './styles'
import Modal from '../Modal'
import ButtonSmall from '../ButtonSmall'
import Collaborators from './Collaborators'
import LIST from '../../queries/list'



const ListSettings = () => {

  // @ts-ignore
  let { id: listId } = useParams()
  // @ts-ignore
  let history = useHistory()

  const [list, { loading, error, data: listData }] = useLazyQuery(LIST)
  // const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () => {
    history.push('/dashboard')
  }
  
  useEffect(() => {
    list({
      variables: {
        id: listId
      }
    })
  }, [listId])

  return (
    <Modal on={true} toggle={() => closeModal()}>
      {() => (
        <Wrapper>
          <Header>
            <Title>LIST SETTINGS</Title>
            <Divider />
          </Header>
          <Grid>
            <Main>
              {listData && <Collaborators list={listData.list}/>}
            </Main>
            <SidePanel>
              <ButtonSmall theme="black-outline">Collaborators</ButtonSmall>
              <ButtonSmall theme="black-outline">Collaborators</ButtonSmall>
              <ButtonSmall theme="black-outline">Collaborators</ButtonSmall>
              <ButtonSmall theme="black-outline">Collaborators</ButtonSmall>
            </SidePanel>
          </Grid>
        </Wrapper>
      )}
    </Modal>
  )
}

export default ListSettings