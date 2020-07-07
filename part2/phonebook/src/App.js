import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event) => {
      event.preventDefault()

      if (persons.some(person => person.name === newName)) {
        window.alert(`${newName} is already added to phonebook`)
      } else {
        const nameObject = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(nameObject));
        setNewName('')
        setNewNumber('')
      }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
           />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
            {persons.map(person =>
                <Person key={person.name} person={person} />
            )}
        </div>
    </div>
  )
}

const Person = ({person}) => {
    return (
        <div>{person.name} {person.number}</div>
    )
}


export default App