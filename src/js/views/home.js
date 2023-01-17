import React,{useEffect,useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.js";

export const Home = () => {

const [personajes, setPersonajes] = useState([])

//hacer una funcion para guardar el fetch

function sacarInfoPersonajes() {
	fetch("https://www.swapi.tech/api/people")
	.then(res => res.json())
	.then(data => data.setPersonajes(data.results))
	.catch(err =>console.error(err))
	
}
	useEffect (()=>{sacarInfoPersonajes();},[])
	console.log(personajes);

	// array.map()
	console.log(personajes);

	//todo lo que se ve se coloca en return
	return(
	<>
	
	</>
);};
