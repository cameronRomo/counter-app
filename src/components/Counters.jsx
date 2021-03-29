import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
  render() { 
    return ( 
      <div>
        <div>
          <button 
            className="btn btn-primary btn-sm m-2" 
            onClick={this.props.onReset}
          >
            Reset
          </button>
        </div>
        { this.props.counters.map(counter => (
          <Counter 
            key={counter.id} 
            onDelete={this.props.onDelete} 
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
     );
  }
}
 
export default Counters