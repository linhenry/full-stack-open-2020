import React, { useState, useEffect } from 'react'
import personService from './services/person'
import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [filterName, setFilterName] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [message, setMessage] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            const person = persons.find(person => person.name === newName)
            const changedPerson = { ...person, number: newNumber }
            if (window.confirm(`${person.name} is already added to the phonebook, replace the old number with a new one?`)) {
                updatePerson(person.id, changedPerson)
            }
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }
            personService
                .create(personObject)
                .then(createdPerson => {
                    setPersons(persons.concat(createdPerson))
                    setNewName('')
                    setNewNumber('')
                    setMessage({message: `Added ${createdPerson.name}`, error: false})
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                })
                .catch(error => {
                    console.log(error.response.data)
                    setMessage({message: error.response.data.error, error: true})
                })
        }
    }

    const updatePerson = (id, changedPerson) => {
        personService
            .update(id, changedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
                setMessage({message: `Updated ${returnedPerson.name}`, error: false})
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
            })
            .catch(error => {
                console.log(error.response.data)
                setMessage({message: error.response.data.error, error: true})
                // setMessage({message: `Information of ${changedPerson.name} has already been removed from the server`, error: true})
            })
    }

    const removePerson = (id) => {
        personService
            .remove(id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== id))
            })
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterNameChange = (event) => {
        setFilterName(event.target.value)
    }

    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} />
            <Filter
                filterName={filterName}
                handleFilterNameChange={handleFilterNameChange}
            />
            <h3>Add a new</h3>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h3>Numbers</h3>
            <Persons 
                persons={filteredPersons}
                removePerson={removePerson} />
        </div>
    )
}

export default App