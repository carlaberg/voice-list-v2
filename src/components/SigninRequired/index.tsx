import React from 'react';
import { useQuery } from "@apollo/client";
import CURRENT_USER_QUERY from '../../queries/loggedInUser'
import AuthForm from '../AuthForm'
import Modal from '../Modal'
import Toggle from '../Toggle'

const SigninRequired = props => {
  const { loading, error, data, refetch } = useQuery(CURRENT_USER_QUERY, {
    fetchPolicy: "network-only"
  });
    if (loading) return null
    if (error) return `Error! ${error.message}`

    if (!data.loggedInUser.userId) {
      return (
        <Toggle initial>
          {({ on, toggle }) => (
            <>
              <Modal toggle={toggle} on={on}>
                {() => (
                  <AuthForm
                    formType="login"
                    title="Sign in to your account"
                    toggleModal={toggle}
                    onSubmitSuccess={refetch}
                  />
                )}
              </Modal>
            </>
          )}
        </Toggle>
      )
    }
    return props.children
  }

export default SigninRequired