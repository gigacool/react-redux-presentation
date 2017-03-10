import React from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/loading/Loading';

import Applications from '../../components/applications/Applications';
// import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

class Portfolio extends React.Component {

  hasFailedLoading() {
    return typeof this.props.applications.error !== 'undefined';
  }

  _renderError() {
    return null;
      // <ErrorMessage
      //   display={true}
      //   errorMessage={<FormattedMessage
      //     id="error.FailureLog"
      //     defaultMessage="An error occured in the server. Please contact the system administrator."
      //   />}
      // />
  }

  render() {
    const { applications, fetched, filter, scores } = this.props;
    if (!fetched) { return (<Loading />); }
    if (this.hasFailedLoading()) { return this._renderError(); }
    return (<Applications
      applications={applications}
      scores={scores}
      filter={filter} />);
  }
}

Portfolio.propTypes = {
  /** applications obtained from the API */
  applications: React.PropTypes.array.isRequired,
  /** Application has been fetched */
  fetched: React.PropTypes.bool
};

function mapStateToProps(state) {
  return ({
    applications: state.applications.applications,
    scores: state.applications.scores,
    fetched: state.applications.fetched,
    filter: state.applications.filter
  });
}


export default connect(mapStateToProps)(Portfolio);
