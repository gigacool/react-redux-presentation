import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { filterApplications } from '../../business/applications/actions';

import Filter from '../filter/Filter';
import Application from './Application';
import './applications.scss';

class Applications extends React.Component {
  static propTypes = {
    applications: React.PropTypes.array.isRequired,
    filterApplications: React.PropTypes.func.isRequired,
    filter: React.PropTypes.string.isRequired,
    scores: React.PropTypes.array.isRequired
  }
  componentWillUnmount() {
    // this.props.resetFilter(); // Reset filter when navigating to another page
  }

  handleFilter = (event) => {
    this.props.filterApplications(event.target.value);
  };

  render() {
    return (
      <div className="application-list">
        <header>
          <h2>Applications listing</h2>
          <Filter
            filterText={this.props.filter}
            handleFilter={this.handleFilter}
            placeholder='Search...'
          />
        </header>
        <ul>
          {this.props.applications.map((application, index) => {
            return (<Application
              key={index}
              application={application}
              scores={this.props.scores}
            />);
          })}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterApplications: (searchText) => dispatch(filterApplications(searchText)),
  };
}

export default connect(null, mapDispatchToProps)(Applications);
