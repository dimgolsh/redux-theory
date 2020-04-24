import React, {Component} from 'react'
import './App.scss'
import {connect} from 'react-redux';
import { number } from 'prop-types';

class App extends Component {
  state = {
    counter: 0
  }

  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch){

  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: ()=> dispatch({type:'SUB'}),
    onAddNumber: number => dispatch({type: 'NUM', payload: number})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
