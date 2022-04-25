import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/IsAuth';
export const Page2 = () => {

    const {
        isAuth,
        users,
        setUsers,
        login2,
        submission,
        submit
    } = useContext(AuthContext)

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUsers({
            ...users,
            [name]: value
        });

       
    }

    if(submit){
        return <div>
           Check Users <Link to = "/users">Users</Link>
       </div>
   }
    if(!isAuth){
        return <div>
            Please fill the details <Link to = "/one">Page One</Link>
        </div>
    }

   

   
    
   
    const handleSubmit = (event) => {
        event.preventDefault();
        if(users.name != '' && users.age != '' && users.birthday !== '') {
            fetch('http://localhost:3004/users', {
                method: 'POST',
                body: JSON.stringify(users),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // login2();
                submission()
            });
        } else {
            alert('Invalid login credentials');
        }
        
    };


  return (
      <div>

    <form onSubmit={handleSubmit}>
    <label htmlFor="">State</label>
    <input
        type="text"
        placeholder='Enter Your Name'
        onChange={handleChange}
        name="state"
        value={users.state}
    />
    <br />

    <label htmlFor="">address</label>
    <input
        type="number"
        placeholder='Enter Your Age'
        onChange={handleChange}
        name="address"
        value={users.address}
    />
    <br />
    <label htmlFor="">PIN:</label>

    <input
        type="text"
        placeholder='Enter Your Birth date'
        onChange={handleChange}
        name="pin"
        value={users.pin}
    />
    <button>Submit</button>
</form>

</div>

  )
}
