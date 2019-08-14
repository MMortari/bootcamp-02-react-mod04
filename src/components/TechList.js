import React, { Component } from 'react';

//Components
import TechItem from './TechItem';

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
  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(techs => techs !== tech) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <h1>{this.state.newTech}</h1> */}

        <ul>
          {this.state.techs.map((tech, index) => (
            <TechItem key={index} tech={tech} onDelete={() => this.handleDelete(tech)} />
          ))}
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