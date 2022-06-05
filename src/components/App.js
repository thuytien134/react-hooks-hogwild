import React from "react";
import Nav from "./Nav";
import {hogs} from "../porkers_data"
import Card from "./Cardlist";
import Sort from "./Sort";
import {useState} from "react"

function App() {
	
	return (
		<div className="App">
			<Nav />
			
			{/* <Filter hogs={hogs} greased={greased} setGreased={setGreased} /> */}
			<Card hogs = {hogs}/>
		</div>
	);
}

export default App;
