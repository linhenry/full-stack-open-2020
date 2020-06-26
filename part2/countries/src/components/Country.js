import React from 'react';

const Country = ({country}) => {
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
                <img src={country.flag} alt="Picture of selected country's flag" width="150" height="150"/>
            </div>
        </div>
    );
};

export default Country;