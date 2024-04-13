import React, {useState} from 'react'
import './App.css'
import Laskuri from './laskuri.jsx'
import Posts from './Posts.jsx'
import CustomerList from './CustomerList.jsx'
import Message from './Message.jsx'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App=()=> {
//App komponentin tila
  
 // const [showLaskuri, setshowLaskuri] = useState(false)
//Statet messagen näyttämistä varten
  const [showMessage, setShowMessage] = useState('')
  const [message, setMessage] = useState('')
  const [isPositive, setIsPositive] = useState(true)

  
  
   return (
     <div className="App">
       <Router>
      
           <Navbar bg="dark" variant="dark">
             <Nav className="mr-auto">
                 <Nav.Link href='/customers'>Customers</Nav.Link>
                 <Nav.Link href='/posts'>Some higlights</Nav.Link>
                 <Nav.Link href='/users'>Users</Nav.Link>
                 <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
             </Nav>
           </Navbar>
                        
         <h1>Northwind Corporation</h1>

         {showMessage && <Message message={message} isPositive={isPositive} />}

         <Routes>
           <Route path="/customers"
           element={<CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
           setShowMessage={setShowMessage} />}>
           </Route>

           {/* <Route path="/users"
           element={<UserList setMessage={setMessage} setIsPositive={setIsPositive} 
           setShowMessage={setShowMessage} />}>
           </Route> */}

           <Route path="/posts"
           element={<Posts />}>
           </Route>
          
           <Route path="/laskuri" 
           element={<Laskuri />}>
         </Route>
        
         </Routes>
       </Router>
     </div>
   )

    // return (
    //  <div className='app'>
    //    <h1>Hello from react!</h1>
    //   {showMessage && <Message message={message} isPositive={isPositive} /> }
    //    <div>
    //      <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setshowMessage={setshowMessage} />
    //    </div>
    //    <div>
    //      <Posts />
    //    </div>

        

      {/* {showLaskuri && <Laskuri huomio={huomio} />}  */}
        {/* Alla oleva tapa on sama kuin ylhäällä, mutta yleisempi. Näytä teksti tulee näkyviin kun 
        showLaskuri on jotain muuta, kun true eli false */}
       {/* {showLaskuri === true ? <Laskuri huomio={huomio} /> : <button>Näytä</button>}

       {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

       {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>} */}

       {/* <Viesti teksti = "Tervehdys app komponentista!" />    */}

     //</div>
        
   //) 
  
}

export default App
