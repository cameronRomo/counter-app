import React, { Component } from 'react';

class Counter extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps :>> ', prevProps);
    console.log('prevState :>> ', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("counter - unmount");
  }
  
  render() { 

    console.log("Counter - Rendered")

    return (
      <React.Fragment>
        <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
        <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button> 
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        <ul>
          {/* { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) } */}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
}
 
export default Counter;