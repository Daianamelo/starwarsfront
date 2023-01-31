import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


const Vehiculos = (props) => {
    console.log(props);
    const {store, actions} = useContext(Context);

    return ( 
      <div className="card-deck">
        <div className="card" style={{width:"18rem" }}>
          <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+props.id+".jpg"}className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">{props.descripcion}</p> 
            <Link to={"/single/"+ props.id} className="btn btn-warning">Details</Link>
            <button className="btn btn-light border-warning"onClick={()=>actions.agregarFavoritos(props.nombre)}>💛</button>
          </div>
        </div>
      </div>
    )
    }  
  
  
  export default Vehiculos;