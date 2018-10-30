import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 1
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props, state) 
    // if (props.value !== state.value) {
    //    return {
    //      value: props.value
    //    }
    //  }
     return null
   }
  Add = () => {
    this.setState({ value: this.state.value + 1})
  }
  render() {
    const data = {
      value: {
        value: this.state.value
      },
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">你好世界</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.Add.bind(this)}>+1</button>
        <Alerter {...data}/>
      </div>
    );
  }
}
class Alerter extends Component {
constructor(props){
  super(props)
  this.state = {
    value: {
      value: 1,
    }
  }
}
 static getDerivedStateFromProps(props, state) {
  if (props.value !== state.value) {
     return {
       value: props.value
     }
   }
   return null
 }
componentDidMount(){
  this.setState({ value: this.props.value })
}
// UNSAFE_componentWillReceiveProps(nextprops) {
//   console.log('UNSAFE_componentWillReceiveProps', nextprops)
// }
render(){
  const { value } = this.state
  return(
    <div>{value.value}</div>
  )
}
}
export default App;
