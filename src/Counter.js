import React, { Component } from 'react';
import {connect} from 'react-redux';
import { add2 } from './redux/actions/actions';

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
      onAddNumber: number => dispatch(add2(number))
    }
  }

  
export default connect(mapStateToProps,mapDispatchToProps)(Counter);