import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = product => {
    this.setState({ value:  this.state.value + 1});
  }
  
  render() { 
    return (
      <React.Fragment>
        <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
        <button onClick={ (product) => this.handleIncrement() } className="btn btn-secondary btn-sm">Increment</button> 
        <ul>
          {/* { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) } */}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}
 
export default Counter;