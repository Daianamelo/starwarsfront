import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import UnaCarta from "../component/unaCarta.js";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [personaje, setPersonaje]=useState({})
	console.log(personaje)
	
	function detallesPersonaje() { 
	
		fetch("https://www.swapi.tech/api/people/"+params.theid)
		.then(res => res.json())
		.then(data => setPersonaje(data.results))
		.catch(err => console.error(err))
	}
	useEffect(()=>{
		detallesPersonaje();
	},[])
	return (
		<UnaCarta/>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
