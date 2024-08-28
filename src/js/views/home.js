import React, { useEffect, useState, useContext } from "react";

import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const [naves, setNaves] = useState ([])
	useEffect (()=>{
		console.log ('aquí')
		fetch ('https://www.swapi.tech/api/starships/')
		.then((response) => response.json ())
		.then((data) => setNaves (data.results ))

	},[])

	return (

	
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<Cardnave name='dfdfdf'/>
		<Cardnave name='aaaa'/>
		<Cardnave name='bbbbb'/>

		<h1>des api con componente</h1>
		{store.navesflux.map((nave) => <Cardnave key={nave.uid} name={nave.name}/> )}
	</div>

);

}