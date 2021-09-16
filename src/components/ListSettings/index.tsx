import React from 'react'
import { 
  Wrapper,
  Header,
  Title,
  Divider,
  Grid,
  Main,
  SidePanel
} from './styles'
import ButtonSmall from '../ButtonSmall'
import Collaborators from './Collaborators'

interface ListSettingsProps {
  list?: any;
}

const ListSettings = ({ list }: ListSettingsProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>LIST SETTINGS</Title>
        <Divider />
      </Header>
      <Grid>
        <Main>
          <Collaborators list={list}/>
        </Main>
        <SidePanel>
          <ButtonSmall theme="black-outline">Collaborators</ButtonSmall>
          <ButtonSmall theme="black-outline">Collaborators</ButtonSmall>
          <ButtonSmall theme="black-outline">Collaborators</ButtonSmall>
          <ButtonSmall theme="black-outline">Collaborators</ButtonSmall>
        </SidePanel>
      </Grid>
    </Wrapper>
  )
}

export default ListSettings