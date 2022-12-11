
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import Message from './components/Message'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {
  // desestructuración de las peticiones desde useCrud
  const { users, getAllData, createNewUser, updateInfoUser } = useCrud()
  // Actualizacion de informacion de los usuarios
  const [updateInfo, setUpdateInfo] = useState()
  // apertura y cierre componente del formulario
  const [closeForm, setCloseForm] = useState(true)
  // modal Success
  const [message, setMessage] = useState(true)

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <div className="App">
      <div className="header__container">
        <h1 className='header__title'>Usuarios</h1>
        <button onClick={() => setCloseForm(false)} className='app__btn btn__user'><i className='bx bx-user-plus'></i> <span className='header__title-span'>Create New User</span></button>
      </div>
      <div className={`form__container ${closeForm && 'close__form'}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateInfoUser={updateInfoUser}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className={`form__container ${message && 'close__form'}`}>
        <Message
          setMessage={setMessage}
        />
      </div>
      <div className="users__container">
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              getAllData={getAllData}
              setUpdateInfo={setUpdateInfo}
              setCloseForm={setCloseForm}
              setMessage={setMessage}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
