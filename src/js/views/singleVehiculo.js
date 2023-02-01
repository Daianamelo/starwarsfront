import React, {
    useState,
    useEffect,
    useContext
} from "react";
import PropTypes from "prop-types";
import {
    Link,
    useParams
} from "react-router-dom";
import {
    Context
} from "../store/appContext";
// import UnaCarta from "../component/unaCarta.js";

export const SingleVehiculo = props => {
    const {
        store,
        actions
    } = useContext(Context);
    const params = useParams();


    useEffect(() => {
        actions.detalleVehiculo(params.theid)
    }, [])
	return ( 
        <div className="card mb-3">
        <div className="row g-0">
        <div className="col-md-4">
            <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+params.theid+".jpg"} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{store.vehiculos.properties?.name}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
            </div>
        </div>
        </div>
    </div>
        
    );
};

SingleVehiculo.propTypes = {
    match: PropTypes.object
};