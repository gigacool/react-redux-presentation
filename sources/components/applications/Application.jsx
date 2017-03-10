import React from 'react';
import classNames from 'classnames';

import Values from '../values/Values';

/**
* An Application is the shorthand display of an application within the listing of application portfolio. It is meant
* to work with Applications
*/
class Application extends React.Component {
  render() {
    const { application, scores } = this.props;
    const classes = classNames({
      'visible': application.visible,
      'hidden': !application.visible,
      'good': application.results['60017'] >= 2.9,
      'moderate': application.results['60017'] < 2.9 && application.results['60017'] >= 2,
      'poor': application.results['60017'] < 2
    });
    return (
      <li className={classes} key={application.guid}>
        <div className="application-state">
          <div
            className="application-name hover-analysis"
            onClick={this.openProgressDialog}>
            {application.name}
          </div>
          <Values scores={scores} values={application.results} />

        </div>
      </li>
    );
  }
}

Application.propTypes = {
  application: React.PropTypes.object,
  scores: React.PropTypes.array
};

export default Application;
