import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = { 
    name: 'fucker'
  }

  asyncNiceness = (name) => {
    return Promise.resolve(name)
  }

  async componentDidMount() {
    return this.setState({
      name: await this.asyncNiceness('deary')
    })
  }

  render() { 
    return ( 
      <h2>Hello form the damn component... {this.state.name}</h2>
    )
  }
}
 
export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
    
