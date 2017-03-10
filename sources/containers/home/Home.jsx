import React from 'react';
import { connect } from 'react-redux';

import { fetchApplications } from '../../business/applications/actions';

import Portfolio from '../applications/Portfolio';
import Tiles from '../../components/tiles/Tiles';

import './home.scss';

export class Home extends React.Component {
  static propTypes = { };

  componentWillMount() {
    if (!this.props.fetched) {
      this.props.fetchApplications();
    }
  }

  render() {
    return (
      <div className="home">
        <Tiles
          values={this.props.scores}
        />
        <Portfolio
          fetched={this.props.fetched}
          applications={this.props.applications}
        />
      </div>
    );
  }
}

Home.propTypes = {
  /** Calling the API to get all the applications  */
  fetchApplications: React.PropTypes.func.isRequired,
  /** applications obtained from the API */
  applications: React.PropTypes.object.isRequired,
  /** Application has been fetched */
  fetched: React.PropTypes.bool
};

const mapStateToProps = function(state) {
  return {
    applications: state.applications,
    fetched: state.applications.fetched,
    scores: state.applications.scores

  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchApplications: (versions) => dispatch(fetchApplications(versions))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
