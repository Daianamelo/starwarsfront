import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom" //Es una forma de manejar la navegación en una aplicación de React
import PropTypes from "prop-types";
import {
    Link,
    useParams
} from "react-router-dom";





export const Registro = () => {
    const[password,setPassword]=useState("")
    const {store, actions}=useContext(Context)
    const[nombre,setNombre]=useState("")
    const[email,setEmail]=useState("")
    const[apellido,setApellido]=useState("")
    // const [name, setName]=useState("")

    function enviarDatos(e) {
        e.preventDefault()
        actions.registrarse(nombre,apellido,email,password)
        setNombre("")
        setApellido("")
        setEmail("")
        setPassword("")
        }

  return (
    <>
     {store.auth === true ? <Navigate to="/demo"/>:
    <form onSubmit={enviarDatos}>
  <div className="form-group">
  <input type="text" className="form-control" placeholder="First name" value={nombre}
              onChange={(e)=>setNombre(e.target.value)}/>
  <input type="text" className="form-control" placeholder="Last name" value={apellido}
              onChange={(e)=>setApellido(e.target.value)}/>
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>}
    </>
  )
}