import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { Toggle, Modal } from 'carls-components'
import { Transition, animated } from 'react-spring'
import AuthForm from '../AuthForm'
import Button from '../Button'
import {
  HeaderWrapper, HeaderBar, Home, ButtonWrapper, LoginButtons, SignoutButton
} from './styles'
import { Halign } from '../../layout/mixins'
import LOGGED_IN_USER from '../../queries/loggedInUser'

const Header = props => {
  const { loading, error, data, refetch } = useQuery(LOGGED_IN_USER, {
    fetchPolicy: "network-only"
  });

  if (loading) return null
  if (error) return null

  const loginButton = () => {

    if (loading === false) {
      return (
        <LoginButtons>
          <Toggle>
            {({ on, toggle }) => (
              <React.Fragment>
                <Button theme="light" onClick={toggle}>
                  Sign up
                </Button>
                <Modal toggle={toggle} on={on}>
                  {() => <AuthForm 
                  formType="create" 
                  title="Create a new account" 
                  toggleModal={toggle}
                  onSubmitSuccess={props => console.log(props)}
                  />}
                </Modal>
              </React.Fragment>
            )}
          </Toggle>
          <Toggle>
            {({ on, toggle }) => (
              <React.Fragment>
                <Button theme="light" onClick={toggle}>
                  Sign in
                </Button>
                <Modal toggle={toggle} on={on}>
                  {() => (
                    <AuthForm
                      formType="login"
                      title="Sign in to your account"
                      toggleModal={toggle}
                      onSubmitSuccess={props => props.history.replace('/dashboard')}
                    />
                  )}
                </Modal>
              </React.Fragment>
            )}
          </Toggle>
        </LoginButtons>

      )
    }
  };

  const signoutButton = () => {
      if (loading === false) {
        return (
          <SignoutButton>
            <Button
              type="link"
              theme="light"
              href="/dashboard"
              active={props.location.pathname === '/dashboard'}
            >
              Dashboard
            </Button>
            <Button
              theme="light"
              onClick={() => {
                localStorage.removeItem('graphcoolToken');
                props.history.replace('/');
                setTimeout(() => refetch(), 500);
              }}
            >
              Sign out
            </Button>
          </SignoutButton>
        )
      }
  };

  return (
    <HeaderWrapper>
      <Halign>
        <HeaderBar>
          <Link to="/">
            <Home>Voice List</Home>
          </Link>
          <ButtonWrapper>{data.loggedInUser && data.loggedInUser.userId ? signoutButton() : loginButton()}</ButtonWrapper>
        </HeaderBar>
      </Halign>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
