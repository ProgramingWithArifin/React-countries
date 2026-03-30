import React, { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all").then(res=>res.json());
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback= {<p>Loding The Countries...</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
