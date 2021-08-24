import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  FormWrapper, FormTitle, InputGroup, BackendMessage
} from './styles';
import LOGIN_USER from '../../queries/loginUser';
import CREATE_USER from '../../queries/createUser';
import Button from '../Button';
import Input from '../Input';
import Overlay from '../Overlay';
import Spinner from '../Spinner';
import validate from '../../utils/validate';
import * as variables from '../../style/variables';

interface AuthFormProps {
  formType: string,
  title: string,
  toggleModal: () => void,
  onSubmitSuccess: () =>  void
}

const AuthForm = ({ formType, title, toggleModal, onSubmitSuccess }: AuthFormProps) => {

  const queries = {
    create: CREATE_USER,
    login: LOGIN_USER
  };

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [emailShowMessage, setEmailShowMessage] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordShowMessage, setPasswordShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [backendMessage, setBackendMessage] = useState('');

  function resetForm() {
    setEmail('');
    setPassword('');
  }

  function updateMessages() {
    let emailMessage = '';
    let passwordMessage = '';

    if (!validate.email(email)) {
      emailMessage = 'Please fill in a valid email';
    }

    if (!validate.password(password)) {
      passwordMessage = 'Please fill in a valid password';
    }

    setEmailMessage(emailMessage);
    setPasswordMessage(passwordMessage);
    setEmailShowMessage(emailShowMessage)
    setPasswordShowMessage(passwordShowMessage)
  }

  function handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    
    if (field === 'email') {
      setEmailShowMessage(false);
      setEmailValid(validate[field](value));
      setEmail(e.target.value);
    } 

    if (field === 'password') {
      setPasswordShowMessage(false);
      setPasswordValid(validate[field](value));
      setPassword(e.target.value);
    }
  }

  const [handleUser] = useMutation(queries[formType], {
    onCompleted(data) {
      setLoading(false);
      localStorage.setItem('graphcoolToken', data[`${formType}User`].token);
      resetForm();
      toggleModal();
      setTimeout(() => {
        if (typeof onSubmitSuccess === 'function') {
          onSubmitSuccess()
        }
      }, 1000);        
    },
    onError(error) {
      console.error(error);
      setLoading(false);
    }
  });

  return (
    <FormWrapper
      id="auth-form"
      onSubmit={(e) => {
        e.preventDefault();
        updateMessages();

        if (!validate.email(email) || !validate.password(password)) return;

          setLoading(true)
          handleUser({
            variables: {
              input: {
                email,
                password
              }
            }
          })
      }}
    >
      <Spinner loading={loading} />
      <FormTitle>{title}</FormTitle>
      <InputGroup>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={e => handleChange(e)}
          value={email}
          valid={emailValid}
          showMessage={emailShowMessage}
          message={emailMessage}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={e => handleChange(e)}
          value={password}
          valid={passwordValid}
          showMessage={passwordShowMessage}
          message={passwordMessage}
        />
      </InputGroup>
      <BackendMessage>
        {/* {error && error.graphQLErrors.map(item => item.functionError.message)} */}
      </BackendMessage>
      <Button type="submit" theme="light">
        {formType === 'create' ? 'sign up' : 'sign in'}
      </Button>
    </FormWrapper>
  );
}
// @ts-ignore
export default AuthForm;
