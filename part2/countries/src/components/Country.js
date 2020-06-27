import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Country = ({country}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.name}`)
            .then(response => {
                setWeather(response.data.current)
            })
    }, [country])

    return (
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>languages</h2>
            <div>
                <ul>
                    {country.languages.map(language => 
                        <li key={language.iso639_2}>{language.name}</li>)}
                </ul>
            </div>
            <div>
                <img src={country.flag} alt="Selected country's flag" width="150" height="150"/>
            </div>
            <h2>weather in {country.capital}</h2>
            <div>
                {
                weather ?
                <div>
                    <div><strong>temperature: </strong>{weather.temperature} Celcius</div>
                    <img src={weather.weather_icons} alt="Weather icon" width="150" height="150"/>
                    <div><strong>wind: </strong> {weather.wind_speed} mph, direction {weather.wind_dir}</div>
                </div> :
                <div>loading...</div>
                }
            </div>
        </div>
    );
};

export default Country;