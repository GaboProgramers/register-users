import React from 'react'
import './styles/message.css'

const Message = ({ setMessage, message }) => {

    const handleCloseModal = () => {
        setMessage({
            isClose: true,
            msg: ''
        })
    }

    return (
        <div className='message__container'>
            <h2 className='message__title'>Eliminar Usuario</h2>
            <p className='message__paragraph'>
                El usuario <span className='message__span'>{message}</span> se ha eliminado
            </p>
            <button className='message__btn' onClick={handleCloseModal}>Aceptar</button>
        </div>
    )
}

export default Message