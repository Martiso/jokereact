import React, {Component} from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      punkty:0,
      url:'',
      urljoke:''
    }
  }
  
  
  dawajPsa = () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(data => this.setState({url: data.message}))

  }
  
  dawajJoke = () =>{
    fetch('http://api.icndb.com/jokes/random')
    .then(resp => resp.json())
    .then(data => this.setState({urljoke: data.value.joke}))
  }
  
  render() {
    return <div>

    
    <button onClick={this.dawajPsa}>qwerty</button>
    <button onClick={this.dawajJoke}>joke</button>
    <img src={this.state.url}></img>
    <p>{this.state.urljoke}</p>
    </div>
  }
}

export default App