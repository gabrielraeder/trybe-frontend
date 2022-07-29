import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      person: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
    }, async () => {
      const url = 'https://api.randomuser.me/'
      await fetch(url).then((resp) => resp.json()).then((data) => {
        this.setState({
          loading: false,
          person: data.results,
        })

      })
    })
  }

  shouldComponentUpdate(_nextProps, { person }) {
    const ages = person
      .map((pers) => pers.dob.age)
      .some((age) => age <= 50)
    return ages;
  }
  
  render() {
    const { loading, person } = this.state;
    const maped = person
      .map((pers, index) => <p key={index}>{pers.name.first} {pers.name.last}, {pers.dob.age}</p>)
    return (
      <div>
        <h1>Random Person</h1>
        <div>
          {loading ? 'Carregando...' : maped }
        </div>

      </div>
    )
  }
}


