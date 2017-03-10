import React from 'react';
import Tile from './Tile';

export default class Tiles extends React.Component {
  static propTypes = {
    values: React.PropTypes.array
  };
  render() {
    return (
      <div className="tiles">
        {this.props.values.map((val, index) => {
          return (<Tile key={index} {...val} />);
        })}
      </div>
    );
  }
}
