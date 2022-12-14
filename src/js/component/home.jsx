import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<>
		<div className="sujetador"/>
		<div className="traffict-light">
			<div className={color == "red" ? "red on": "red"} onClick={()=>setColor("red")}></div>
			<div className={color == "yellow" ? "yellow on": "yellow"} onClick={()=>setColor("yellow")}></div>
			<div className={color == "green" ? "green on": "green"} onClick={()=>setColor("green")}></div>
		</div>
		</>
	)
};

export default Home;
