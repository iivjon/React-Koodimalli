import './App.css'
import { useState} from 'react'
import CustomerService from './services/Customer'

//props otettu vastaan suoraan nimellä
const CustomerEdit = ({setMuokkaustila, setIsPositive,setshowMessage,setMessage, muokattavaCustomer}) => {

    //komponentin tilan määritys

    const [newCustomerId, setNewCustomerId] = useState(muokattavaCustomer.customerId)
    const [newCompanyName, setNewCompanyName] = useState(muokattavaCustomer.companyName)
    const [newContactName, setNewContactName] = useState(muokattavaCustomer.contactName)
    const [newContactTitle, setNewContactTitle] = useState(muokattavaCustomer.contactTitle)
    const [newCountry, setNewCountry] = useState(muokattavaCustomer.country)
    const [newAddress, setNewAddress] = useState(muokattavaCustomer.address)
    const [newCity, setNewCity] = useState(muokattavaCustomer.city)
    const [newPostalCode, setNewPostalCode] = useState(muokattavaCustomer.postalCode)
    const [newPhone, setNewPhone] = useState(muokattavaCustomer.phone)
    const [newFax, setNewFax] = useState(muokattavaCustomer.fax)
    
  
    const handleSubmit = (event) => {
        event.preventDefault()
        var newCustomer ={
            customerId : newCustomerId,
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
        CustomerService.update(newCustomer)
        .then(response =>{
            if(response.status === 200){
                setMessage('Edited customer ' + newCustomer.companyName)
                setIsPositive(true)
                setshowMessage(true)

                setTimeout(() => {
                    setshowMessage(false)
                },5000)

                setMuokkaustila(false)
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
    <div id='edit'>
        <h2>Tämä on muokkauskomponetti</h2>
        <h2>Customer edit</h2>

        <form onSubmit={handleSubmit}>
        <div><label>Customer ID</label></div>
         <div><input className='lomake' type='text' value={newCustomerId} disabled  /></div>
         <div><label>Company name</label></div>
         <div><input className='lomake' type='text' value={newCompanyName} onChange={({target}) => setNewCompanyName(target.value)} placeholder='Company Name' required /></div>
         <div><label>Contact name</label></div>
         <div><input className='lomake' type='text' value={newContactName} onChange={({target}) => setNewContactName(target.value)} placeholder='Contact Name' /></div>
         <div><label>Company title</label></div>       
         <div><input className='lomake' type='text' value={newContactTitle} onChange={({target}) => setNewContactTitle(target.value)} placeholder='Contact Title' /></div>
         <div><label>Address</label></div>
         <div><input className='lomake' type='text' value={newAddress} onChange={({target}) => setNewAddress(target.value)} placeholder='Address' /></div>
         <div><label>City</label></div>
         <div><input className='lomake' type='text' value={newCity} onChange={({target}) => setNewCity(target.value)} placeholder='City' /></div>
         <div><label>Postalcode</label></div>
         <div><input className='lomake' type='text' value={newPostalCode} onChange={({target}) => setNewPostalCode(target.value)} placeholder='Postal Code' /></div>
         <div><label>Country</label></div>
         <div><input className='lomake' type='text' value={newCountry} onChange={({target}) => setNewCountry(target.value)} placeholder='Country' /></div>
         <div><label>Phone</label></div>
         <div><input className='lomake' type='text' value={newPhone} onChange={({target}) => setNewPhone(target.value)} placeholder='Phone' /></div>
         <div><label>Fax</label></div>
         <div><input className='lomake' type='text' value={newFax} onChange={({target}) => setNewFax(target.value)} placeholder='Fax' /></div>

            <input type='submit' value='save' />
            <input type='button' value='back' onClick={() => setMuokkaustila(false)} />
        </form>


    </div>
  )
}

export default CustomerEdit