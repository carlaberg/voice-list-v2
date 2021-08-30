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
  Trash
} from './styles'
import List from '../List'
import Card from '../Card'
import ProfileImage from '../ProfileImage'

const ListSettings = (props) => {
  return (
    <Wrapper>
      <Header>
        <Title>LIST SETTINGS</Title>
        <Divider />
      </Header>
      <Grid>
        <Main>
          <Card>
            <List>
              <List.Item>
                <CollaboratorItemGroup>
                  <ProfileImage />
                    Item 1
                  <Trash />
                </CollaboratorItemGroup>
              </List.Item>
              <List.Item>
                <CollaboratorItemGroup>
                  <ProfileImage />
                    Item 2
                  <Trash />
                </CollaboratorItemGroup>
              </List.Item>
              <List.Item>
                <CollaboratorItemGroup>
                  <ProfileImage />
                    Item 3
                  <Trash />
                </CollaboratorItemGroup>
              </List.Item>
            </List>
          </Card>
        </Main>
        <SidePanel>Side panel</SidePanel>
      </Grid>
    </Wrapper>
  )
}

export default ListSettings