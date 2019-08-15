import React, { Component } from 'react';

//Components
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  }

  componentDidMount() { // Executado assim que o componente aparecer na tela
    const techs = localStorage.getItem('techs');

    if(techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  componentDidUpdate(prevProps, prevState) { // Executado sempre que houver alteração nas props ou estado
    if(prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }
  componentWillMount() { // Executando quando o componente deixa de existir

  }
  
  // Funções
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
        <input 
          type="text" 
          placeholder="Add new tech" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} 
        />
        <button type="submit">Cadastrar</button>

        <ul>
          {this.state.techs.map((tech, index) => (
            <TechItem key={index} tech={tech} onDelete={() => this.handleDelete(tech)} />
          ))}
        </ul>

      </form>
    )
  }

}

export default TechList;