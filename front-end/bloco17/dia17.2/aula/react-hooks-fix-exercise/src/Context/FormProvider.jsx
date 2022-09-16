import React, { useState } from 'react'
import formContext from './formContext'

export default function FormProvider({ children }) {
  const [ students, setStudents ] = useState([])

  const addStudents = (newStudent) => {
    setStudents(students.concat(newStudent))
  }

  return (
    <formContext.Provider value={{ students, addStudents }}>
      { children }
    </formContext.Provider>
  )
}
