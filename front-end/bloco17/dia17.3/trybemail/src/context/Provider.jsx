import React, { useEffect, useState } from 'react'
import Context from './Context'
import emails from '../mockEmails'

export default function Provider({ children }) {

  const [ email, setEmails ] = useState(emails)

  useEffect(() => {
    !email.find((e) => e.status === 0) && alert('Parabéns! Você leu todas suas mensagens!')
  }, [email])

  const context = {
    email,
    setEmails
  }

  return (
    <Context.Provider value={context}>{ children }</Context.Provider>
  )
}
