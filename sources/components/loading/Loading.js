import React from 'react';
import './Loading.scss';

// TODO add material-ui loader here
// TODO should we publish a single one or multiple ones (bar, spinner, ...) ?

export default class Loading extends React.Component {
  render() {
    return (<div className="loading-bar-container"><span className="expand" /></div>);
  }
}
