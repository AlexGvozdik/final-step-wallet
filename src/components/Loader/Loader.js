import React from 'react';
import Loader from 'react-loader-spinner';

export default class App extends React.Component {
  render() {
    return (
      <Loader
        type="Puff"
        color="#FFFFFF"
        height={300}
        width={300}
        timeout={3000} //3 secs
      />
    );
  }
}
