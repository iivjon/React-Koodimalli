import './App.css'
import { useState} from 'react'
import LoginService from './services/Auth'
import md5 from 'md5'

//props otettu vastaan suoraan nimellä
const Login = ({setMessage,setshowMessage,setIsPositive, setLoggedInUser, setAdminUser}) => {

    //komponentin tilan määritys

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //setLoggedInUser(response.data.userName)
  
    const handleSubmit = (event) => {
        event.preventDefault()
        var userForAuth ={
            username : username,
            password : md5(password)// salataan md5 kirjaston metodilla
        }
        LoginService.authenticate(userForAuth)
        .then(response =>{
            if(response.status === 200){
                localStorage.setItem("username", response.data.userName)
                localStorage.setItem("accesslevelId", response.data.accesslevelId)
                localStorage.setItem("token", response.data.token)
                    
                setAdminUser(response.data.accesslevelId === 1)
                setLoggedInUser(response.data.userName)
                console.log(response)
                setMessage(`Logged in as: ${userForAuth.username}`)
                setIsPositive(true)
                setshowMessage(true)

                setTimeout(() => {
                    setshowMessage(false)
                },5000)

                
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
    const emptyFields = () => {
        setUsername("")
        setPassword("")
    }

    const adminCheck = () => {
        alert(userForAuth.accesslevelId)
            setAminUser(true)
        
    }

  return (
    <div id='loginWindow'>
        
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

         <div><input type='text' value={username} onChange={({target}) => setUsername(target.value)} placeholder='Username' /></div>
         <div><input type='password' value={password} onChange={({target}) => setPassword(target.value)} placeholder='Password' /></div>

             <input type='submit' value='Login'  />
            <input type='button' value='Empty' onClick={() => emptyFields()} />
            <input type='button' value='admin' onClick={() => adminCheck()} />{/* tähän lisätty adminCheck */}
        </form>


    </div>
  )
}

export default Login