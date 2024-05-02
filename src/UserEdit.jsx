import './App.css'
import { useState} from 'react'
import UserService from './services/User'
import md5 from 'md5'

//props otettu vastaan suoraan nimellä
const UserEdit = ({setMuokkaustila, setIsPositive,setshowMessage,setMessage,muokattavaKayttaja}) => {

    //komponentin tilan määritys
    const [newUserId, setNewUserId] = useState(muokattavaKayttaja.userId)
    const [newFirstname, setNewFirstname] = useState(muokattavaKayttaja.firstName)
    const [newLastname, setNewLastname] = useState(muokattavaKayttaja.lastName)
    const [newEmail, setNewEmail] = useState(muokattavaKayttaja.email)
    const [newAccesslevelId, setNewAccesslevelId] = useState(muokattavaKayttaja.acceslevelId)
    const [newUserName, setNewUsername] = useState(muokattavaKayttaja.userName)
    const [newPassword, setNewPassword] = useState(muokattavaKayttaja.password)

    
  
    const handleSubmit = (event) => {
        event.preventDefault()
        var newUser ={
            userId : newUserId,
            firstname : newFirstname,
            lastname : newLastname,
            email : newEmail,
            acceslevelId : parseInt(newAccesslevelId),
            username : newUserName,
            password : md5(newPassword)// salataan md5 kirjaston metodilla
        }
        UserService.update(newUser)
        .then(response =>{
            if(response.status === 200){
                setMessage(`Edited user:  ${newUser.firstname}  ${newUser.lastname}`)
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
        
        <h2>User edit</h2>

        <form onSubmit={handleSubmit}>
         <div><input className='lomake' type='number'value={newUserId} disabled></input></div>
         <div><input className='lomake' type='text' value={newFirstname}onChange={({target}) => setNewFirstname(target.value)} placeholder='First name' /></div>
         <div><input className='lomake' type='text' value={newLastname} onChange={({target}) => setNewLastname(target.value)} placeholder='Last name' /></div>
         <div><input className='lomake' type='email' value={newEmail} onChange={({target}) => setNewEmail(target.value)} placeholder='Email' /></div>
         <div><input className='lomake' type='number' value={newAccesslevelId} onChange={({target}) => setNewAccesslevelId(target.value)} placeholder='Access level' /></div>
         <div><input className='lomake' type='text' value={newUserName} onChange={({target}) => setNewUsername(target.value)} placeholder='Username' /></div>
         <div><input className='lomake' type='password' value={newPassword} onChange={({target}) => setNewPassword(target.value)} placeholder='Password' /></div> 

            <input type='submit' value='save' />
            <input type='button' value='back' onClick={() => setMuokkaustila(false)} />
        </form>


    </div>
  )
}

export default UserEdit