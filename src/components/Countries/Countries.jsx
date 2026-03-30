import React, { use } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h2 className='countries-length'>There are {countries.length}countries.</h2>
            <div className="countries-area">
                {
                    countries.map(country=> <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;