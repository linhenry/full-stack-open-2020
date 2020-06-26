import React from 'react';

const Countries = ({countries}) => {
    return (
        <div>
                {countries.length > 10 ? 
                <div>Too many matches, specify another filter</div> :
                countries.map(country => 
                    <div key={country.alpha3Code}>{country.name}</div>)
                }
        </div>
    );
};

export default Countries;