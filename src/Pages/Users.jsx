import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Contexts/IsAuth'
import { Link } from 'react-router-dom'
export const Users = () => {
    const [data, setData] = useState([])

    const {
        submit
    } = useContext(AuthContext)
    useEffect(() =>{
        fetch('http://localhost:3004/users')
        .then((res) => res.json())
        .then(result => setData(result))
    },[])
    console.log(data)
    
    if(!submit){
        return <div>
            Please fill the details <Link to = "/one">Page One</Link>
        </div>
    }

  return (
    <div>
        {
            data.map((item,index) => <div key={index}>
                <div style={{border: "1px solid Green", width: '250px', margin:'auto', marginTop:"20px"}}>
                    <h4>Name: {item.name} </h4>
                    <h4>Age: {item.age} </h4>
                    <h4>Date Of Birth: {item.birthday} </h4>
                    <h4>State: {item.state} </h4>

                </div>

            </div> )
        }
    </div>
  )
}
