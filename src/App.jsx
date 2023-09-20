
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react'



function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  

  const baseUrl = 'https://users-crud.academlo.tech'

const [ users, getUsers, createUsers, deleteUsers, updateUsers  ] = useFetch(baseUrl)

useEffect(() => {
  getUsers('/users')

}, [])

console.log(users)

  
  
  return (
    <div>
      <h1>App De Registros</h1> 
      <FormUsers
      createUsers={createUsers}
      infoUpdate={infoUpdate}
      updateUsers={updateUsers}
      setInfoUpdate={setInfoUpdate}
      />  
      <div>
        {

          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUsers={deleteUsers}
            setInfoUpdate={setInfoUpdate}
            />
          ))
        
        }</div>                                                                                                                    
    
    </div>    
  )
}

export default App
