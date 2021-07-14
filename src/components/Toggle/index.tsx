import React, { Component, ReactElement } from 'react';

interface ToggleProps {
  initial: boolean;
  children(data: any): ReactElement;
}

interface ToggleState {
  on: boolean
}

class Toggle extends Component<ToggleProps, ToggleState> {
  initial: boolean;

  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.initial = props.initial || false;

    this.state = {
      on: this.initial
    }
  }
  
  toggle() {
    this.setState({
      on: !this.state.on
    })
  }
  
  render() {
    const { children } = this.props;
    
    return children({
      on: this.state.on,
      toggle: this.toggle
    })
  }
}

export default Toggle;