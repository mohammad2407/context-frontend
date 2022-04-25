import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/IsAuth';
export const Page1 = () => {

    const {
        users,
        login,
        setUsers
    } = useContext(AuthContext)

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUsers({
            ...users,
            [name]: value
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login()
        console.log(login)
    }


  return (
    <form >
    <label htmlFor="">Name</label>
    <input
        type="text"
        placeholder='Enter Your Name'
        onChange={handleChange}
        name="name"
        value={users.name}
    />
    <br />

    <label htmlFor="">Age</label>
    <input
        type="number"
        placeholder='Enter Your Age'
        onChange={handleChange}
        name="age"
        value={users.age}
    />
    <br />
    <label htmlFor="">Date Of Birth:</label>

    <input
        type="text"
        placeholder='Enter Your Birth date'
        onChange={handleChange}
        name="birthday"
        value={users.birthday}
    />
   
    <button disabled ={users.name === '' || users.age === '' || users.birthday === ''} type = 'submit' onClick={handleSubmit} >
    <Link to = '/two' style={{margin: "10px"}} >Next</Link>
    </button>
</form>
  )
}
