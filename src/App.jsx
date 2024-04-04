import React, {useState} from 'react'
import './App.css'
import Laskuri from './laskuri.jsx'
import Viesti from './viesti.jsx'
import Posts from './Posts.jsx'

const App=()=> {
//App komponentin tila
  
  const [showLaskuri, setshowLaskuri] = useState(false)

  
  
  const huomio = () => {
    alert("Huomio!")
  }

  return (
    <div className='app'>
      <h1>Hello from react!</h1>
      <div>
        <Posts />
      </div>

        

      {/* {showLaskuri && <Laskuri huomio={huomio} />}  */}
        {/* Alla oleva tapa on sama kuin ylhäällä, mutta yleisempi. Näytä teksti tulee näkyviin kun 
        showLaskuri on jotain muuta, kun true eli false */}
      {showLaskuri === true ? <Laskuri huomio={huomio} /> : <button>Näytä</button>}

      {showLaskuri && <button onClick={() => setshowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setshowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti = "Tervehdys app komponentista!" />   

    </div>
        
  )
  
}

export default App
