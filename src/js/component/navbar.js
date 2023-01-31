import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.js";



export const Navbar = () => {

	const {store,actions} = useContext(Context);
 



	return (
		<nav className="navbar navbar-light bg-light mb-3">
      <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" alt="Logo" width="50" height="34" className="d-inline-block align-text-top"></img>
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
	
				<div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Favorites
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
  {store.favoritos.map((element, index) =><li className="dropdown-item" key={index}><button onClick={()=> actions.borrarFavoritos(element)}  type="button" key={index}>{element}<i class="fas fa-eraser"></i></button></li>
                    )}
  </ul>
</div>
			
			</div>
		</nav>
	);
};
