import React, { useState, useContext } from 'react'
import formContext from '../Context/formContext';

export default function Form() {
  const { addStudents } = useContext(formContext)
  const [name, setName ] = useState('');
  const [age, setAge ] = useState('');
  const [city, setCity ] = useState('');
  const [module, setModule ] = useState('');

  const handleChange = (set, value) => {
    set(value)
  }

  const student = {
    name,
    age,
    city,
    module,
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addStudents(student)
    setName('')
    setAge('')
    setCity('')
    setModule('Fundamentos')
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          id="name"
          name="name"
          value={ name }
          onChange={ ({ target: { value } }) => handleChange(setName, value) }
        />
      </label>

      <label htmlFor="age">
        Idade:
        <input
          type="number"
          id="age"
          name="age"
          value={ age }
          onChange={ ({ target: { value } }) => handleChange(setAge, value) }
        />
      </label>

      <label htmlFor="city">
        Cidade:
        <input
          type="text"
          id="city"
          name="city"
          value={ city }
          onChange={ ({ target: { value } }) => handleChange(setCity, value) }
        />
      </label>
      <br />
      <label htmlFor="Fundamentos">
        Fundamentos
        <input
          type="radio"
          id="Fundamentos"
          name="module"
          value="Fundamentos"
          onChange={ ({ target: { value } }) => handleChange(setModule, value) }
        />
      </label>

      <label htmlFor="Front-End">
        Front-End
        <input
          type="radio"
          id="Front-End"
          name="module"
          value="Front-End"
          onChange={ ({ target: { value } }) => handleChange(setModule, value) }
        />
      </label>

      <label htmlFor="Back-End">
        Back-End
        <input
          type="radio"
          id="Back-End"
          name="module"
          value="Back-End"
          onChange={ ({ target: { value } }) => handleChange(setModule, value) }
        />
      </label>

      <label htmlFor="Ciencia">
        Ciencia da Computação
        <input
          type="radio"
          id="Ciencia"
          name="module"
          value="Ciencia da Computação"
          onChange={ ({ target: { value } }) => handleChange(setModule, value) }
        />
      </label>
      <br />
      <br />
      <button type="submit">Salvar</button>
    </form>
  )
}
