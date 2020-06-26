import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Countries from './components/Countries'
import Country from './components/Country'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filterCountry, setFilterCountry] = useState('')

    const handleFilterCountries = event => {
        setFilterCountry(event.target.value)
    }
    const filteredCountries = countries.filter(country => {
        return (
            country, country.name.toLowerCase().includes(filterCountry.toLowerCase())
        )
    })

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                // console.log('response data', response.data)
                setCountries(response.data)
            })
    }, [])
    // console.log('render', countries.length, 'countries')
    console.log('filteredCountries', filteredCountries)

    return (
        <div>
            <div>
                find countries
                <input
                    value={filterCountry}
                    onChange={handleFilterCountries}
                />
            </div>
            <div>
                {filteredCountries.length === 1 ?
                <Country country={filteredCountries[0]} /> :
                <Countries countries={filteredCountries} />
                }
            </div>
        </div>
    );
};

export default App;