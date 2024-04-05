import './App.css'
import { useState } from 'react'
//props otettu vastaan suoraan nimellä
const Customer = ({customer}) => {

    const [showDetails, setshowDetails] = useState(false)

  return (
    <div className='custDiv'>
        <h4 onMouseEnter={() => setshowDetails(true)}
        onMouseLeave={() => setshowDetails(false)}>
            {customer.companyName}</h4>

        {showDetails && <div className='customerDetails'>
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