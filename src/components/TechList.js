import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techs: [
      'PHP', 'NodeJs', 'ReactJs', 'React Native'
    ]
  }

  render() {
    return (
      <ul>
        <li>PHP</li>
        <li>NodeJs</li>
        <li>ReactJs</li>
        <li>React Native</li>
      </ul>
    )
  }

}

export default TechList;