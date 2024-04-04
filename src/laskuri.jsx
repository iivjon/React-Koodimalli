import './App.css'
import { useState } from 'react'
//props otettu vastaan suoraan nimellä
const Laskuri = (huomio) => {
  
    const [luku, setLuku] = useState(0)

  return (
    <>
        <h3>{luku}</h3>        
        <button onClick={()=>setLuku(luku + 1)}>+</button>
        <button onClick={()=>setLuku(luku - 1)}>-</button>
        <button onClick={()=>setLuku(0)}>Reset</button>       
        <button onClick={huomio}>Huomio</button>
    </>
  )
}

export default Laskuri