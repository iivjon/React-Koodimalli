import './App.css'
import { useState, useEffect } from 'react'
import UserService from './services/User'
import UserAdd from './UserAdd'
import User from './User'
import UserEdit from './UserEdit'

//props otettu vastaan suoraan nimellä
const UserList = ({setIsPositive,setshowMessage,setMessage}) => {
  
  //Komponenttien tilojen määritys
    const [users, setUsers] = useState([])
    const [showUser, setshowUser] = useState(false)
    const [lisäystila, setLisäystila] = useState(false)
    const [muokkaustila, setMuokkaustila] = useState(false)
    const [reload, reloadNow] = useState(false)
    const [muokattavaKayttaja, setMuokattavaKayttaja] = useState(false)
    const [search, setSearch] = useState("")


    //Ajetaan aina kun sivu latautuu
  useEffect(()=>{
    UserService.getAll()
    .then(data => {
        setUsers(data)
    })
    //Ajetaan kun joku näistä muuttuu
  } , [lisäystila, reload, muokkaustila]
  )
 //Hakukenttä onChange tapahtumakäsittelijä
  const handleSearchInputChange = (event) => {
    setshowUser(true)
    setSearch(event.target.value.toLowerCase())
  }

  const editUsers = (user) => {
    setMuokattavaKayttaja(user)
    setMuokkaustila(true)
  }

  return (
    <>
       
          <h1><nobr style={{ cursor : 'pointer'}}
        onClick={() => setshowUser(!showUser)}>Users</nobr>

        {!lisäystila && <button className='nappi' onClick={() => setLisäystila(true)}>Add new</button>}</h1>

        {lisäystila && <UserAdd setLisäystila={setLisäystila}
        setIsPositive={setIsPositive} setMessage={setMessage}setshowMessage={setshowMessage}/>} 

        {muokkaustila && <UserEdit setMuokkaustila={setMuokkaustila}
        setIsPositive={setIsPositive} setMessage={setMessage}setshowMessage={setshowMessage}
        muokattavaKayttaja={muokattavaKayttaja}/>} 

       
        {!lisäystila && !muokkaustila &&
        <input placeholder='Search by First Name' value={search} onChange={handleSearchInputChange}>
          </input>} 

        {/* {!lisäystila && !muokkaustila &&
          <table>
            <thead>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Accesslevel</th>
            </thead>
            <tbody>



        { users && users.map(u =>
                {
                    const lowerCaseName = u.lastName.toLowerCase()
                    if (lowerCaseName.indexOf(search)> -1)
                    {
                      return(
                        <tr key={u.userId}>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.email}</td>
                            <td>{u.acceslevelId}</td>
                            <button onClick={() => deleteUser(users)}>Delete</button>


                        </tr>

                       )
                    }
                }
          )
        }
        </tbody>
          </table>}   */}

          {
                !lisäystila && !muokkaustila &&  showUser && users && users.map(u =>
                  {
                    const lowerCaseName = u.firstName.toLowerCase()
                    if (lowerCaseName.indexOf(search)> -1){
                  return(
                <User key={u.userId} user={u} reloadNow={reloadNow} reload={reload}
                setIsPositive={setIsPositive} setshowMessage={setshowMessage} setMessage={setMessage}
                editUser={editUsers} />
            )
          }
          }
          )
        }
        

    </>
  )
}

export default  UserList