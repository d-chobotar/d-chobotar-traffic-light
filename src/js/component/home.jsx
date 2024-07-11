import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {

	const [selectedColor, setSelectedColor] = useState("red")
	const colors = ['red', 'yellow', 'green']

	return (
		<>
			<div id="trafficTop"></div>
			<div id="container">
				{colors.map(c => (
					<div onClick={() => setSelectedColor(c)} key={c} className={`${c} light ${selectedColor === c ? 'selected': ''}`}></div>
				))}
			</div>
		</>
	);
};

export default Home;
