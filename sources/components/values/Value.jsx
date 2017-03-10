import React from 'react';
import numeral from 'numeral';
import classNames from 'classnames';

import './values.scss';

export default class Value extends React.Component {
  static propTypes = {
    score: React.PropTypes.number,
    value: React.PropTypes.number,
    title: React.PropTypes.string
  };

  render() {
    const {score, value, title} = this.props;
    let formattedValue = numeral(value).format('0.00');
    const classes = classNames({
      "comparing-value": true,
      better: value > score,
      same: Math.abs(value - score) < 0.00001,
      worst: value < score
    });
    return (
      <div className="value">
        <div className="comparing-header">{title}</div>
        <div className={classes}>{formattedValue}</div>
      </div>
    );
  }
}
