import React, { useContext } from 'react'
import formContext from '../Context/formContext'

export default function StudentsList() {
  const { students } = useContext(formContext)

  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          <p>{student.name}</p>
          <p>{student.age}</p>
          <p>{student.city}</p>
          <p>{student.module}</p>
        </li>
      ))}
    </ul>
  )
}
