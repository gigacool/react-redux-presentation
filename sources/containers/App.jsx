import React from 'react';
import { connect } from 'react-redux';

import AppHeader from './header/Header';

import './App.scss';

export function App({children}) {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element
};

// const mapStateToProps = createSelector();

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(App);
