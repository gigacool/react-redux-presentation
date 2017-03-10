import React from 'react';
import numeral from 'numeral';

import './tile.scss';

export default class Tile extends React.Component {
  static propTypes = {
    value: React.PropTypes.number,
    title: React.PropTypes.string
  };
  render() {
    return ( <div className="tile">
        <div className="tile-header">{this.props.title}</div>
        <div className="tile-value">{numeral(this.props.value).format('0.00')}</div>
      </div>
    );
  }
}

// componentWillReceiveProps(nextProps, state){
//   // console.log(nextProps.value);
//   let stepValue = (nextProps.value - this.props.value) / 10.0;
//   let step = 0;
//   let interval = setInterval(() => {
//
//     if (step >= 10) {
//       this.setState({
//         value: nextProps.value
//       });
//       clearInterval(interval);
//     }
//     this.setState({
//       value: this.props.value + (stepValue * step),
//       targetValule: nextProps.value,
//       startingValue: this.props.value
//     });
//     step++;
//   }, 10);
// }
