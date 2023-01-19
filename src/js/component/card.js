import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


const Card = (props) => {
    console.log(props);
    const {store, actions} = useContext(Context);

      return ( 
        <div className="card" style={{width:"18rem"}}>
          {/* https://starwars-visualguide.com/assets/img/characters/2.jpg */}
        <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"}className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.descripcion}</p> 
          <Link to={"/single/"+ props.id} className="btn btn-warning">Details</Link>
          <Link to="#" className="btn btn-light border-warning"onClick={()=>actions.agregarFavoritos(props.name)}><i className="fa-solid fa-heart"></i></Link>
        </div>
      </div>
        
      )
  }
  
  
  export default Card;