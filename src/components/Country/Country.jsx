import React from 'react';
import './country.css'
const Country = ({country}) => {
    const png = country?.flags?.flags.png;
    const alt = country?.flags?.flags.alt;
    return (
        <div className='country'>
            <img src={png} alt={alt} />
            <h2>Name:{country.name.common}</h2>
            <p>Population:{country?.population?.population}</p>
        </div>
    );
};

export default Country;