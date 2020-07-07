import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
      event.preventDefault()
      console.log(newName)
      if (persons.some(person => person.name === newName)) {
        window.alert(`${newName} is already added to phonebook`)
      } else {
        const nameObject = {
            name: newName
        }
        setPersons(persons.concat(nameObject));
        setNewName('') 
      }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
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

const Person = ({person}) => <div>{person.name}</div>


export default App