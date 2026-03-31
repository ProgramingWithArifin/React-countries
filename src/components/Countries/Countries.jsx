import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = ({countriesPromise}) => {
    const [visitedCountry, setVisited]=useState([]);
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const handleVisited =(country, visit)=>{
            if (visit == 'Not Visited') {
        setVisited([...visitedCountry, country]);
    } else {
        setVisited(visitedCountry.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3));
    }
    }
    return (
        <div>
            <h2 className='countries-length'>There are {countries.length}countries.</h2>
            <h2 className='visited-length'>Visited:{visitedCountry.length}</h2>
            <h2 className='visited-length'>Not Visited:{countries.length - visitedCountry.length}</h2>
            <div className="countries-area">
                {
                    countries.map(country=> <Country key={country.ccn3.ccn3} country={country} handleVisited={handleVisited} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;