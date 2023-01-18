import React from "react";

const Card = (props) => {
    console.log(props);
      return ( 
        <div className="card" style={{width:"18rem"}}>
        <img src={props.url} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.descripcion}</p> 
          <a href="#" className="btn btn-warning">Go somewhere</a>
          <a href="#" className="btn btn-light border-warning"><i className="fa-solid fa-heart"></i></a>
        </div>
      </div>
        
      )
  }
  
  
  export default Card;