import React from "react";

class About extends React.Component {
  render() {
    const skills = ["HTML", "CSS", "JavaScript", "DOM"] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return <div>
      <h1>Gabriel Gonçalves</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed purus non dui eleifend ornare quis vel purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultrices sodales nibh, a bibendum erat sagittis ut.</p>
      <h3>Minhas Habilidades</h3>
      <ul>{jsxSkills}</ul>
    </div>

  }
}

export default About;