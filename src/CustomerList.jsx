import './App.css'
import { useState, useEffect } from 'react'
import CustomerService from './services/Customer'
import Customer from './Customer'
//props otettu vastaan suoraan nimellä
const CustomerList = () => {
  
    const [customers, setCustomers] = useState([])

    const [showCustomers, setshowCustomers] = useState(false)

  useEffect(()=>{
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
    })
  } , []
  )

  return (
    <>
        <h2 onClick={() => setshowCustomers(!showCustomers)}>Customers</h2>  
        {/* {showPost && <button onClick={() => setshowPost(!showPost)}>Piilota data</button>}

        {!showPost && <button onClick={() => setshowPost(!showPost)}>Näytä data</button>} 
        {
        showPost &&  posts && posts.map(p =>
            <div className='posts' key={p.id}>
              <h2>ID number: {p.id}</h2>
              <h4 className='postText'>{p.title}</h4>
              <p>{p.body}</p>
              </div>
              
            )
        }      */}

        {
            showCustomers && customers && customers.map(c =>(
                <Customer key={c.customerId} customer={c} />
            ))
        }

    </>
  )
}

export default CustomerList