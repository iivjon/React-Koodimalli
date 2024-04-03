import './App.css'
import { useState } from 'react'

const Laskuri = (props) => {
  
    const [luku, setLuku] = useState(0)

  return (
    <>
        <h3>{luku}</h3>        
        <button onClick={()=>setLuku(luku + 1)}>+</button>
        <button onClick={()=>setLuku(luku - 1)}>-</button>
        <button onClick={()=>setLuku(luku * 0)}>Reset</button>
        <button onClick={()=>setLuku(luku == 0)}>Reset2</button>
        <button onClick={props.huomio}>Huomio</button>
    </>
  )
}

export default Laskuri