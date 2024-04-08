import React, {useState} from 'react'
import './App.css'
import Laskuri from './laskuri.jsx'
import Viesti from './viesti.jsx'
import Posts from './Posts.jsx'
import CustomerList from './CustomerList.jsx'
import Message from './Message.jsx'

const App=()=> {
//App komponentin tila
  
  const [showLaskuri, setshowLaskuri] = useState(false)
//Statet messagen näyttämistä varten
  const [showMessage, setshowMessage] = useState(false)
  const [message, setMessage] = useState('')
  const [isPositive, setIsPositive] = useState(false)

  
  
  const huomio = () => {
    alert("Huomio!")
  }

  return (
    <div className='app'>
      <h1>Hello from react!</h1>
     {showMessage && <Message message={message} isPositive={isPositive} /> }
      <div>
        <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setshowMessage={setshowMessage} />
      </div>
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
