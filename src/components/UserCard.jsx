import axios from 'axios'
import React from 'react'
import './styles/userCard.css'

const UserCard = ({ user, getAllData, setUpdateInfo, setCloseForm, setMessage }) => {

    const deleteUserById = () => {
        const URL = `https://users-crud.academlo.tech/users/${user.id}/`

        axios.delete(URL)
            .then(() => {
                getAllData()
                setMessage({
                    isClose: false,
                    msg: `${user.first_name} ${user.last_name}`
                })
            })
            .catch(err => console.log(err))
    }

    const handleEdit = () => {
        setUpdateInfo(user)
        setCloseForm(false)
    }

    return (
        <article className='card'>
            <h2 className='card__title'>{user.first_name} {user.last_name}</h2>
            <ul className='card__body'>
                <li className='card__item'><span className='card__span'>Email </span>{user.email}</li>
                <li className='card__item'><span className='card__span'>Birthday </span><span className='card__span-br'><i className='bx bxs-gift'></i>{user.birthday}</span></li>
            </ul>
            <footer className='card__footer'>
                <button className='card__btn card__btn-trash' onClick={deleteUserById}><i className='bx bx-trash' ></i></button>
                <button className='card__btn card__btn-edit' onClick={handleEdit}><i className='bx bxs-edit'></i></button>
            </footer>
        </article>
    )
}

export default UserCard