import axios from "axios"
import { useState } from "react"

const useCrud = () => {

    const [users, setUsers] = useState()


    const getAllData = () => {
        const URL = 'https://users-crud.academlo.tech/users/'

        axios.get(URL)
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }

    const createNewUser = data => {
        const URL = 'https://users-crud.academlo.tech/users/'
        axios.post(URL, data)
            .then(() => {
                getAllData()
            })
            .catch(err => console.log(err))
    }

    const updateInfoUser = (id, data) => {
        const URL = `https://users-crud.academlo.tech/users/${id}/`
        axios.put(URL, data)
            .then(() => getAllData())
            .catch(err => console.log(err))

    }

    return {
        users,
        getAllData,
        createNewUser,
        updateInfoUser
    }
}

export default useCrud