import React from 'react';
import {
  InputWrapper, StyledInput, Underline, Message, Indicator
} from './styles';

interface EditableInputProps {
  className?: string;
  isFocused: boolean;
  message?: string;
  valid?: boolean; 
  showMessage?: boolean; 
  onBlur?: () => void;
  onChange?: (e: any) => void;
}

interface EditableInputState {
  editable: boolean;
  showIndicators: boolean;
}

class EditableInput extends React.Component<EditableInputProps, EditableInputState> {
  private input: React.RefObject<HTMLElement>;

  constructor(props) {
    super(props)
    
    this.state = {
      editable: false,
      showIndicators: false
    }

    this.input = React.createRef()
  }

  componentDidUpdate(prevProps) {
    if(this.props.isFocused !== prevProps.isFocused) {
      this.updateFocus()
    }
  }

  updateFocus() {
    if (this.props.isFocused) {
      this.input.current.focus()
    } else {
      this.input.current.blur()
    }
  }

  render() {
    const { editable } = this.state
    const { showIndicators } = this.state
    const { message, valid, showMessage, onBlur } = this.props

    return (
      <InputWrapper
        className={this.props.className}
        onClick={() => this.setState({ showIndicators: true })}
      >
        <StyledInput
          // @ts-ignore
          ref={this.input}
          editable={editable}
          {...this.props}
          onFocus={() => this.setState({ editable: !editable })}
          onBlur={() => {
            this.setState({ editable: !editable })
            if (typeof onBlur === 'function') {
              onBlur()
            }
          }}
        />
        <Underline />
        {/* <Message message={message} show={showMessage}>
          {message}
        </Message>
        <Indicator show={showIndicators} valid={valid} /> */}
      </InputWrapper>
    );
  }
}

export default EditableInput;
