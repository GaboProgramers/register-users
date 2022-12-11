import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formCard.css'

const FormUser = ({ createNewUser, updateInfo, updateInfoUser, setUpdateInfo, setCloseForm }) => {

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])


    const { handleSubmit, reset, register, formState: { errors } } = useForm()

    const submit = data => {
        if (updateInfo) {
            // Update
            updateInfoUser(updateInfo.id, data)
            setUpdateInfo()
        } else {
            // Create
            createNewUser(data)
        }
        setCloseForm(true)
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
        })
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <div onClick={() => {
                setCloseForm(true)
                setUpdateInfo()
                reset({
                    email: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    birthday: ""
                })
            }} className="form__close"><i className='bx bx-shield-x'></i></div>
            <h2 className='form__title'>{updateInfo ? 'Update User' : 'Create User'}</h2>
            <div className='form__div'>
                <label className='form__label' htmlFor="email">Email <span className='form__label-require'>*</span></label>
                <input className='form__input' type="email" id="email" {...register("email", { required: true })} />
                {errors.email && <span className='form__error'><i class='bx bx-error'></i>mail is required</span>}
            </div>

            <div className='form__div'>
                <label className='form__label' htmlFor="password">Password <span className='form__label-require'>*</span></label>
                <input className='form__input' type="password" id="password" {...register("password", { required: true, minLength: 10 })} />
                {errors.password && <span className='form__error'><i class='bx bx-error'></i>Minimum characters required is 10</span>}
            </div>

            <div className='form__div'>
                <label className='form__label' htmlFor="first_name">First Name <span className='form__label-require'>*</span></label>
                <input className='form__input' type="text" id="first_name" {...register("first_name", { required: true })} />
                {errors.first_name && <span className='form__error'><i class='bx bx-error'></i>First Name is required</span>}
            </div>

            <div className='form__div'>
                <label className='form__label' htmlFor="last_name">Last Name <span className='form__label-require'>*</span></label>
                <input className='form__input' type="text" id="last_name" {...register("last_name", { required: true })} />
                {errors.last_name && <span className='form__error'><i class='bx bx-error'></i>Last Name is required</span>}
            </div>

            <div className='form__div'>
                <label className='form__label' htmlFor="birthday">Birthday <span className='form__label-require'>*</span></label>
                <input className='form__input' type="date" id="birthday" {...register("birthday", { required: true })} />
                {errors.birthday && <span className='form__error'><i class='bx bx-error'></i>Birthday is required</span>}
            </div>

            <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default FormUser