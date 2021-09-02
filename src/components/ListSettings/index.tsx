import React from 'react'
import { 
  Wrapper,
  Header,
  Title,
  Divider,
  Grid,
  Main,
  SidePanel,
  Trash,
  SettingsGroupTitle,
  StyledCard,
  CollaboratorGrid,
  CollaboratorName
} from './styles'
import ProfileImage from '../ProfileImage'
import ButtonSmall from '../ButtonSmall'

const ListSettings = (props) => {
  return (
    <Wrapper>
      <Header>
        <Title>LIST SETTINGS</Title>
        <Divider />
      </Header>
      <Grid>
        <Main>
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