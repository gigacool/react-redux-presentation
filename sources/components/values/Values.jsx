import React from 'react';
import Value from './Value';
import './values.scss';

export default class Values extends React.Component {
  static propTypes = {
    scores: React.PropTypes.array,
    values: React.PropTypes.object
  };

  render() {
    const {scores, values} = this.props;
    console.log(values)
    return (
      <div className="values">
        <Value score={scores[0].value} title="Total Quality" value={values['60017']} />
        <Value score={scores[1].value} title="Security" value={values['60016']} />
        <Value score={scores[2].value} title="Robustness" value={values['60013']} />
        <Value score={scores[3].value} title="Efficiency" value={values['60014']} />
        <Value score={scores[4].value} title="Changeability" value={values['60012']} />
        <Value score={scores[5].value} title="Transferability" value={values['60011']} />
      </div>
    );
  }
}
