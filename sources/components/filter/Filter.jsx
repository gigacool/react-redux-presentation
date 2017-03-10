import React from 'react';

import './Filter.scss';

/**
* Filter component enable the activation of a handler when text is typed.
* Features to add
*  - add a threshold parameter to limit the calling of the handler when number of characters are below threshold
*/
export default class Filter extends React.Component {
  static propTypes = {
    filterText: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    handleFilter: React.PropTypes.func.isRequired
  }
  static defaultProps = {
    placeholder: 'Filter'
  }
  render() {
    return (
      <div className="filter-input">
        <input
          type="text"
          value={this.props.filterText}
          placeholder={this.props.placeholder}
          onChange={this.props.handleFilter}
        />
      </div>);
  }
}
