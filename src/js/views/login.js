import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";




export const Login = () =>{
    const {store, actions}=useContext(Context)
    const[email,setEmail]=useState("") 
    const[password,setPassword]=useState("")
    function enviarDatos(e) {
      e.preventDefault()
      actions.login(email,password)
      resetForm()
  }

  function resetForm() {
      setEmail("")
      setPassword("")
  }
  
  
  

    return(
        <>
         {store.auth === true ? <Navigate to="/"/>:
        <form onSubmit={enviarDatos}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={password}
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