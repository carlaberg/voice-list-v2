import React from 'react'
import { 
  Wrapper,
  Header,
  Title,
  Divider,
  Grid,
  Main,
  SidePanel,
  CollaboratorItemGroup,
  Trash,
  SettingsGroupTitle,
  StyledCard,
  CollaboratorGrid
} from './styles'
import List from '../List'
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
              <div>Carl Åberg</div>
              <Trash />
              <ProfileImage />
              <div>Carl Åberg</div>
              <Trash />
              <ProfileImage />
              <div>Carl Åberg</div>
              <Trash />
            </CollaboratorGrid>
            {/* <List>
              <List.Item>
                <CollaboratorItemGroup>
                  <ProfileImage />
                    <div>Carl Åberg</div>
                  <Trash />
                </CollaboratorItemGroup>
              </List.Item>
              <List.Item>
                <CollaboratorItemGroup>
                  <ProfileImage />
                    <div>Maja Nilsson</div>
                  <Trash />
                </CollaboratorItemGroup>
              </List.Item>
              <List.Item>
                <CollaboratorItemGroup>
                  <ProfileImage />
                    <div>Lilla Vicke Vire</div>
                  <Trash />
                </CollaboratorItemGroup>
              </List.Item>
            </List> */}
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