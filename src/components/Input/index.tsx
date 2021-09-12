import React from 'react';

import {
  Wrapper,
  InputWrapper,
  StyledInput,
  Underline,
  Message,
  Indicator,
  Label
} from './styles';

interface InputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  isFocused?: boolean;
  value: string;
  message?: string;
  valid?: boolean;
  showMessage?: boolean;
  label?: string;
  allowIndicators?: boolean;
  className?: string;
}

interface InputState {
  showIndicators: boolean;
}

class Input extends React.Component<InputProps, InputState> {
  constructor(props) {
    super(props);

    this.state = {
      showIndicators: false
    };
  }

  render() {
    const { showIndicators } = this.state
    const { message, valid, showMessage, label, allowIndicators = true, isFocused = false } = this.props
    
    return (
      <Wrapper className={this.props.className} onClick={() => this.setState({ showIndicators: true })}>
        <InputWrapper>
          {label && <Label>{label}</Label>}
          <StyledInput {...this.props} />
        </InputWrapper>
        <Underline isFocused={isFocused} />
        <Message message={message} show={showMessage}>
          {message}
        </Message>
        {allowIndicators && <Indicator show={showIndicators} valid={valid} />} 
      </Wrapper>
    );
  }
}

export default Input;
