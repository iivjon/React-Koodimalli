import './App.css'
import { useState} from 'react'
import UserService from './services/User'
import md5 from 'md5'

//props otettu vastaan suoraan nimellä
const UserAdd = ({setLisäystila, setIsPositive,setshowMessage,setMessage}) => {

    //komponentin tilan määritys

    const [newFirstname, setNewFirstname] = useState('')   
    const [newLastname, setNewLastname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newAccesslevelId, setNewAccesslevelId] = useState(2)
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordCheck, setNewPasswordCheck] = useState('')

    const handlePassword = (pass) => {
        setNewPassword(pass.target.value);
    }
    const passwordCheck = (pass) => {
        setNewPasswordCheck(pass.target.value);
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
        var newUser ={
            firstname : newFirstname,
            lastname : newLastname,
            email : newEmail,
            acceslevelId : parseInt(newAccesslevelId),
            username : newUsername,
            password : md5(newPassword)// salataan md5 kirjaston metodilla
        }
        UserService.create(newUser)
        .then(response =>{
            if(response.status === 200){
                setMessage(`Added new user:  ${newUser.firstname} ${newUser.lastname}`)
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
        
        <h2>User add</h2>

        <form onSubmit={handleSubmit}>
         <div><input className='lomake' type='text' value={newFirstname}onChange={({target}) => setNewFirstname(target.value)} placeholder='First name' /></div>
         <div><input className='lomake' type='text' value={newLastname} onChange={({target}) => setNewLastname(target.value)} placeholder='Last name' /></div>
         <div><input className='lomake' type='email' value={newEmail} onChange={({target}) => setNewEmail(target.value)} placeholder='Email' /></div>
         <div><input className='lomake' type='number' value={newAccesslevelId} onChange={({target}) => setNewAccesslevelId(target.value)} placeholder='Access level' /></div>
         <div><input className='lomake' type='text' value={newUsername} onChange={({target}) => setNewUsername(target.value)} placeholder='Username' /></div>

         <div><input className='lomake' type='password' value={newPassword} onChange={handlePassword} placeholder='Password' /></div>
         <div><input className='lomake' type='password' value={newPasswordCheck}onChange={passwordCheck}  placeholder='Password check' /></div>
         <div><p>{newPassword === newPasswordCheck ? 'Passwords match' : 'Passwords does not match'}</p></div>
         
            <input className='save' type='submit' value='save' disabled={newPassword !== newPasswordCheck} />
            <input className='back' type='button' value='back' onClick={() => setLisäystila(false)} />
        </form>


    </div>
  )
}

export default UserAdd