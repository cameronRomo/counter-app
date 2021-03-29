import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
  render() { 
    
    console.log("Counters - rendered");
    
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return ( 
      <div>
        <div>
          <button 
            className="btn btn-primary btn-sm m-2" 
            onClick={onReset}
          >
            Reset
          </button>
        </div>
        { counters.map(counter => (
          <Counter 
            key={counter.id} 
            onDelete={onDelete} 
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
     );
  }
}
 
export default Counters