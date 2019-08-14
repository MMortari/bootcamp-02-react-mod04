import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'PHP', 'NodeJs', 'ReactJs', 'React Native'
    ]
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech], newTech: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <h1>{this.state.newTech}</h1> */}

        <ul>
          {this.state.techs.map((tech, index) => <li key={index}>{tech}</li>)}
        </ul>

        <input 
          type="text" 
          placeholder="Add new tech" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} 
        />
        <button type="submit">Cadastrar</button>
      </form>
    )
  }

}

export default TechList;