import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  selector: string
}

export default class Portal extends React.Component<PortalProps> {
  element: HTMLElement | null;

  componentDidMount () {
    this.element = document.querySelector(this.props.selector)
    this.forceUpdate()
  }

  render () {
    if (this.element === undefined) {
      return null
    }

    return ReactDOM.createPortal(this.props.children, this.element)
  }
}