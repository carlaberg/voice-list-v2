import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello feature branch
      </div>
    );
  }
}


export const bootstrap = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}