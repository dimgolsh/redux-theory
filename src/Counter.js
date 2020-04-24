import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={()=>this.props.onAddNumber(14)}>+</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){

    return {
        counter: state.counter2.counter
    }
}

function mapDispatchToProps(dispatch){

    return {
      onAddNumber: number => dispatch({type: 'NUM2', payload: number})
    }
  }

  
export default connect(mapStateToProps,mapDispatchToProps)(Counter);