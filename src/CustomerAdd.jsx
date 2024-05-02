import './App.css'
import { useState} from 'react'
import CustomerService from './services/Customer'

//props otettu vastaan suoraan nimellä
const CustomerAdd = ({setLisäystila, setIsPositive,setshowMessage,setMessage}) => {

    //komponentin tilan määritys

    const [newCustomerId, setNewCustomerId] = useState('')
    const [newCompanyName, setNewCompanyName] = useState('')
    const [newContactName, setNewContactName] = useState('')
    const [newContactTitle, setNewContactTitle] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newCity, setNewCity] = useState('')
    const [newPostalCode, setNewPostalCode] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newFax, setNewFax] = useState('')
    
  
    const handleSubmit = (event) => {
        event.preventDefault()
        var newCustomer ={
            customerId : newCustomerId.toUpperCase(),
            companyName : newCompanyName,
            contactName : newContactName,
            contactTitle : newContactTitle,
            country : newCountry,
            address : newAddress,
            city : newCity,
            postalCode : newPostalCode,
            phone : newPhone,
            fax : newFax
        }
        const token = localStorage.getItem('token')
        CustomerService
          .setToken(token)

        CustomerService.create(newCustomer)
        .then(response =>{
            if(response.status === 200){
                setMessage('Added new customer ' + newCustomer.companyName)
                setIsPositive(true)
                setshowMessage(true)

                setTimeout(() => {
                    setshowMessage(false)
                },5000)

                setLisäystila(false)
            }
        })
        .catch(error => {
            setMessage(error)
            setIsPositive(false)
            setshowMessage(true)

            setTimeout(() => {
                setshowMessage(false)
            },5000)
        })

    }


  return (
    <div id='addNew'>
        <h2>Tämä on lisäyskomponetti</h2>
        <h2>Customer add</h2>

        <form onSubmit={handleSubmit}>
         <div><input className='lomake' type='text' value={newCustomerId} onChange={({target}) => setNewCustomerId(target.value)} placeholder='Customer ID 5 capital letter' maxLength='5' minLength='5' /></div>
         <div><input className='lomake' type='text' value={newCompanyName} onChange={({target}) => setNewCompanyName(target.value)} placeholder='Company Name' /></div>
         <div><input className='lomake' type='text' value={newContactName} onChange={({target}) => setNewContactName(target.value)} placeholder='Contact Name' /></div>
         <div><input className='lomake' type='text' value={newContactTitle} onChange={({target}) => setNewContactTitle(target.value)} placeholder='Contact Title' /></div>
         <div><input className='lomake' type='text' value={newAddress} onChange={({target}) => setNewAddress(target.value)} placeholder='Address' /></div>
         <div><input className='lomake' type='text' value={newCity} onChange={({target}) => setNewCity(target.value)} placeholder='City' /></div>
         <div><input className='lomake' type='text' value={newPostalCode} onChange={({target}) => setNewPostalCode(target.value)} placeholder='Postal Code' /></div>
         <div><input className='lomake' type='text' value={newCountry} onChange={({target}) => setNewCountry(target.value)} placeholder='Country' /></div>
         <div><input className='lomake' type='text' value={newPhone} onChange={({target}) => setNewPhone(target.value)} placeholder='Phone' /></div>
         <div><input className='lomake' type='text' value={newFax} onChange={({target}) => setNewFax(target.value)} placeholder='Fax' /></div>

            <input type='submit' value='save' />
            <input type='button' value='back' onClick={() => setLisäystila(false)} />
        </form>


    </div>
  )
}

export default CustomerAdd