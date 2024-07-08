import React from 'react'
import { useState } from 'react'
import './Login.css'

const LoginForm = () => {
    const [datos, setDatos] = useState({
        name: "",
        lastName: ""      
    });
    const handleInputChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const enviarDatos = (e) => {
        e.preventDefault();
        alert(`Usuario registrado correctamente como ${datos.name} ${datos.lastName}`)
    }
    return (
        <div className='form' id='registro'>
            <form action="submit" onSubmit={enviarDatos}>
                <label>Login</label>
                <input type="text"
                    placeholder='name'
                    name='name'
                    onChange={handleInputChange}
                    required />
                <input type="text"
                    placeholder='lastName'
                    name='lastName'
                    onChange={handleInputChange} 
                    required/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default LoginForm;