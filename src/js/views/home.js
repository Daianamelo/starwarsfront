import React,{useEffect,useState,useContext} from "react";
import { BrowserRouter } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.js";
import Planetas from "../component/planetas.js";
import Vehiculos from "../component/vehiculos.jsx";
import { Context } from "../store/appContext.js";



export const Home = () => {
//personajes es el espacio de memoria, setPersonajes es la funcion que actualiza el estado y el estado inicial esta vacio es un array
const {store} = useContext(Context);
// console.log(store.demo);
// const [personajes, setPersonajes] = useState([])
 console.log(store.personajes)

//hacer una funcion para guardar el fetch

// function sacarInfoPersonajes() {
// 	fetch("https://www.swapi.tech/api/people")
// 	.then(res => res.json())
// 	// .then(data => data.setPersonajes(data.results))
// 	// .then(data =>console.log(data.results)) //me trae el array
// 	.then(data =>setPersonajes(data.results))//me setea el array
// 	.catch(err =>console.error(err))
	
// }
	// useEffect (()=>{sacarInfoPersonajes();},[])
	// console.log(personajes);

	// array.map()
	// console.log(personajes);

	//todo lo que se ve se coloca en return
	return(
	
	<>
	{/* //este me dibuja la carta con su nombre */}
	<div className="container  d-flex flex-row overflow-scroll ">{store.personajes.map((props)=><Card nombre={props.name} id={props.uid} key={props.uid}/>)}</div>
	<div className="container d-flex flex-row overflow-scroll">{store.planetas.map((props)=><Planetas nombre={props.name} id={props.uid} key={props.uid}/>)}</div>
	<div className="container d-flex flex-row overflow-scroll">{store.planetas.map((props)=><Vehiculos nombre={props.name} id={props.uid} key={props.uid}/>)}</div>
	</>
);};
