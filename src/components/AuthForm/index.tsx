import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import { Mutation } from '@apollo/react-components'
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

interface AuthFormQueries {
  create: any,
  login: any
}

interface AuthFormProps {
  formType: string,
  title: string,
  toggleModal: () => void,
  onSubmitSuccess: (props: AuthFormProps) =>  void
}

interface AuthFormState {
  email: string,
  emailValid: boolean,
  emailMessage: string
  emailShowMessage: boolean,
  password: string,
  passwordValid: boolean,
  passwordMessage: string,
  passwordShowMessage: boolean,
  loading: boolean,
  backendMessage: string
}

class AuthForm extends React.Component<AuthFormProps, AuthFormState> {
  queries: AuthFormQueries;

  constructor(props) {
    super(props);

    this.queries = {
      create: CREATE_USER,
      login: LOGIN_USER
    };

    this.state = {
      email: '',
      emailValid: false,
      emailMessage: '',
      emailShowMessage: false,
      password: '',
      passwordValid: false,
      passwordMessage: '',
      passwordShowMessage: false,
      loading: false,
      backendMessage: ''
    };
  }

  resetForm() {
    this.setState({
      email: '',
      password: ''
    });
  }

  updateMessages() {
    const { email, password } = this.state;
    let emailMessage = '';
    let passwordMessage = '';

    if (!validate.email(email)) {
      emailMessage = 'Please fill in a valid email';
    }

    if (!validate.password(password)) {
      passwordMessage = 'Please fill in a valid password';
    }

    this.setState({
      emailMessage,
      passwordMessage,
      emailShowMessage: true,
      passwordShowMessage: true
    });
  }

  handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    
    if (field === 'email') {
      this.setState({ 
        emailShowMessage: false,
        emailValid: validate[field](value),
        email: e.target.value
      });
    } 

    if (field === 'password') {
      this.setState({ 
        passwordShowMessage: false,
        passwordValid: validate[field](value),
        password: value
      });
    }
  }

  render() {
    const {
      email,
      password,
      emailMessage,
      passwordMessage,
      emailValid,
      passwordValid,
      emailShowMessage,
      passwordShowMessage,
      loading,
      backendMessage
    } = this.state;
    const { formType, title, toggleModal, onSubmitSuccess } = this.props;

    return (
      <Mutation
        mutation={this.queries[formType]}
        variables={{input: {
          email,
          password
        }}}
        errorPolicy="all"
      >
        {(handleUser) => (
          <FormWrapper
            id="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.updateMessages();

              if (!validate.email(email) || !validate.password(password)) return;

              this.setState({ loading: true });
                handleUser()
                .then((user) => {
                  this.setState({ loading: false });
                  localStorage.setItem('graphcoolToken', user.data[`${formType}User`].token);
                  this.resetForm();
                  toggleModal();
                  setTimeout(() => {
                    if (typeof onSubmitSuccess === 'function') {
                      onSubmitSuccess(this.props)
                    }
                  }, 1000);
                })
                .catch((error) => {
                  console.log(error);
                  this.setState({ loading: false });
                });
            }}
          >
            {/* <Spinner loading={loading} /> */}
            <FormTitle>{title}</FormTitle>
            <InputGroup>
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                onChange={e => this.handleChange(e)}
                value={email}
                valid={emailValid}
                showMessage={emailShowMessage}
                message={emailMessage}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={e => this.handleChange(e)}
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
        )}
      </Mutation>
    );
  }
}

export default withRouter(AuthForm);
