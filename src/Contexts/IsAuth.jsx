import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [isAuth,setIsAuth] = useState(false);
    const [submit,setIsSubmit] = useState(false);


    const [users, setUsers] = useState({
        name: "",
        age: "",
        birthday:"",
        state:'',
        address :"",
        pin:""
    })
    const submission = () =>{
        setIsSubmit(true)
    }
    const login = () =>{
        setIsAuth(true)
    }
    const login2 = () =>{
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={
            {
                isAuth,
                login,
                users,
                setUsers,
                login2,
                submission,
                submit
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}
