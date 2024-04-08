import './App.css'
import { useState } from 'react'
import CustomerService from './services/Customer'
//props otettu vastaan suoraan nimellä
const Customer = ({customer,setIsPositive,setshowMessage,setMessage, reload, reloadNow}) => {

    const [showDetails, setshowDetails] = useState(false)

    const deleteCustomer =(customer) => {

        let vastaus = window.confirm(`Remove customer ${customer.companyName}`)

        if (vastaus === true){
        
        CustomerService.remove(customer.customerId)
        .then(res => {
            if (res.status === 200){
                setMessage(`Removed customer ${customer.companyName}`)
                setIsPositive(true)
                setshowMessage(true)
                window.scrollBy(0,-10000)//scrollataan sivu ylös
            //Piilotuksen poisto
            setTimeout(() => {
            setshowMessage(false)},5000
        )
        reloadNow(!reload)
            }

            }
            )

            .catch(error => {
                setMessage(error)
                setIsPositive(false)
                setshowMessage(true)
                window.scrollBy(0,-10000)
    
                setTimeout(() => {
                    setshowMessage(false)
                },5000)
            })
        }
        else{
        setMessage('Poisto peruttu onnistuneesti!')
        setIsPositive(true)
        setshowMessage(true)
        window.scrollBy(0,-10000)
    //Piilotuksen poisto
    setTimeout(() => {
    setshowMessage(false)},5000
        
)
        }

    }

  return (
    <div className='custDiv'>
        {/* <h4 onMouseEnter={() => setshowDetails(true)}
        onMouseLeave={() => setshowDetails(false)}>
            {customer.companyName}</h4> */}

          <h4 onClick={() => setshowDetails(!showDetails)}>
            {customer.companyName}</h4>

        {showDetails && <div className='customerDetails'>
            <h3>{customer.companyName} </h3>
            <button onClick={() => deleteCustomer(customer)}>Delete</button>
            <button>Edit</button>
            <table>
                <thead>
                    <tr>
                        <th>Contact person</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{customer.contactName}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.address}</td>
                        <td>{customer.city}</td>
                        <td>{customer.country}</td>
                    </tr>
                </tbody>
                </table>
                </div>}
    </div>
  )
}

export default Customer