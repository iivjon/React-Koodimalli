import './App.css'
import React from 'react'

const Viesti = (props) => (
  
    // return ei tarvita, jos paluttaa vain yhden komponentin  
    <>
        <p>{props.teksti}</p>       
    </>
    )
  
export default Viesti