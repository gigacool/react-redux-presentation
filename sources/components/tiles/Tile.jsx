import React from 'react';
import numeral from 'numeral';
import classNames from 'classnames';

import './tile.scss';

export default class Tile extends React.Component {
  static propTypes = {
    hasValue: React.PropTypes.bool,
    value: React.PropTypes.number,
    title: React.PropTypes.string
  };

  render() {
    const {hasValue, value, title} = this.props;
    let formattedValue = hasValue ? numeral(value).format('0.00') : '-';
    const classes = classNames({
      tile: true,
      inactive: !hasValue,
      good: hasValue && value >= 2.9,
      moderate: hasValue && value < 2.9 && value >= 2,
      poor: hasValue && value < 2
    });
    return (
      <div className={classes}>
        <div className="tile-header">{title}</div>
        <div className="tile-value">{formattedValue}</div>
      </div>
    );
  }
}
