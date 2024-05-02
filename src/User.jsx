import './App.css'
import { useState } from 'react'
import UserService from './services/User'
//props otettu vastaan suoraan nimellä
const User = ({user, editUser, setIsPositive,setshowMessage,setMessage, reload, reloadNow}) => {

    const [showDetails, setshowDetails] = useState(false)

    const deleteUser =(user) => {
        alert("Poista " + user.FirstName)
        let vastaus = window.confirm(`Remove user ${user.FirstName}`)

        if (vastaus === true){
        
        UserService.remove(user.userId)
        .then(res => {
            if (res.status === 200){
                setMessage(`Removed user ${user.firstName}`)
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

          <h4 onClick={() => setshowDetails(!showDetails)}>
            {user.firstName}</h4>

        {showDetails && <div className='userDetails'>
            
            <button className='delete' onClick={() => deleteUser(user)}>Delete</button>
            <button className='edit' onClick={() => editUser(user)}>Edit</button>
            <table>
                <thead>
                    <tr>
                     <th>Firstname</th>                     
                     <th>Lastname</th>
                     <th>Email</th>
                     <th>Accesslevel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                         <td>{user.firstName}</td>                         
                         <td>{user.lastName}</td>
                         <td>{user.email}</td>
                         <td>{user.acceslevelId}</td>
                    </tr>
                </tbody>
                </table>
                </div>}
    </div>
  )
}

export default User