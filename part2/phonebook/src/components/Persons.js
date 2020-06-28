import React from 'react';

const Person = ({ person, removePerson }) => {
    return (
        <div>
            {person.name} {person.number} 
            <button onClick={
                () => {
                    if (window.confirm(`Delete ${person.name}?`))removePerson(person.id)}}>delete</button>
        </div>
    )
}
const Persons = ({persons, removePerson}) => {
    return (
        <div>
            {persons.map(person => {
                return (
                    <Person 
                        removePerson={removePerson}
                        key={person.id} 
                        person={person} />
                )
            })}
        </div>
    );
};

export default Persons;