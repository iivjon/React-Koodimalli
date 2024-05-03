import React, {useState, useEffect} from 'react'
import './App.css'
import Laskuri from './laskuri.jsx'
import Posts from './Posts.jsx'
import CustomerList from './CustomerList.jsx'
import UsersList from './UsersList.jsx'
import ProductList from './ProductList.jsx'
import Message from './Message.jsx'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



const App=()=> {
//App komponentin tila
  
 // const [showLaskuri, setshowLaskuri] = useState(false)
//Statet messagen näyttämistä varten
  const [showMessage, setshowMessage] = useState('')
  const [message, setMessage] = useState('')
  const [isPositive, setIsPositive] = useState(true)
  const [loggedInUser, setLoggedInUser] = useState('')

  const [adminUser, setAdminUser] = useState(false)

  useEffect(() => {
    let storedUser = localStorage.getItem('username')
    if (storedUser !== null){
      setLoggedInUser(storedUser)
    }
  },[])

  useEffect(() => {
    let storedAdmin = localStorage.getItem('accesslevelId')
    if (storedAdmin == 1){
      setAdminUser(true)
    }
  },[])

  //Logout napin tapahtumakäsittelijä
  const logout = () => {
    localStorage.clear()
    setLoggedInUser('')
    setAdminUser(false)
  }
  
   return (
     <div className="App">
       {!loggedInUser && !adminUser &&  <Login setMessage={setMessage} setIsPositive={setIsPositive} 
       setshowMessage={setshowMessage} setLoggedInUser={setLoggedInUser} setAdminUser={setAdminUser} />}

      { loggedInUser && 
       <Router>
      
           <Navbar bg="dark" variant="dark">
             <Nav className="mr-auto">
                 <Nav.Link href='/customers'>Customers</Nav.Link>
                 <Nav.Link href='/posts'>Some higlights</Nav.Link>
                { adminUser &&  <Nav.Link href='/users'>Users</Nav.Link> }
                 <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
                 <Nav.Link href='/product'>Product</Nav.Link>
                 <button className='logout' onClick={() => logout()}>Logout</button>
             </Nav>
           </Navbar>
                        
         <h1>Northwind Corporation</h1>

         {showMessage && <Message message={message} isPositive={isPositive} />}

         <Routes>
           <Route path="/customers"
           element={<CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
           setshowMessage={setshowMessage} />}>
           </Route>

          { adminUser && <Route path="/users"
           element={<UsersList setMessage={setMessage} setIsPositive={setIsPositive} 
           setshowMessage={setshowMessage} />}>
           </Route> } 

           <Route path="/product"
           element={<ProductList setMessage={setMessage} setIsPositive={setIsPositive} 
           setshowMessage={setshowMessage} />}>
           </Route> 

           <Route path="/posts"
           element={<Posts />}>
           </Route>
          
           <Route path="/laskuri" 
           element={<Laskuri />}>
         </Route>
        
         </Routes>
       </Router>
       } 
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
