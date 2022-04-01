import React from "react";

import { Container } from "./styles.js";

function SideBar(props){

	let a_components = [		
		<a href="/profile"><img src="assets/profile.svg"></img></a>,
		<a href="/collections"><img src="assets/collections.svg"></img></a>,
		<a href="/new-collection"><img src="assets/new.svg"></img></a>,
		<a href="/premium"><img src="assets/diamond.svg"></img></a>,
	];

	switch(props.route){
		case "profile":
			a_components[0] = <a href="/profile"><img style={{filter: "invert(100%) brightness(1000%)"}} src="assets/profile.svg"></img></a>;
			break;
		case "collections":
			a_components[1] = <a href="/collections"><img style={{filter: "invert(100%) brightness(1000%)"}} src="assets/collections.svg"></img></a>;
			break;
		case "new-collection":
			a_components[2] = <a href="/new-collection"><img style={{filter: "invert(100%) brightness(1000%)"}} src="assets/new.svg"></img></a>;
			break;
		case "premium":
			a_components[3] = <a href="/premium"><img style={{filter: "invert(100%) brightness(1000%)"}} src="assets/diamond.svg"></img></a>;
			break;
	}

    return(
        <>
			<Container >
				<a href="/"><img style={{height: "50px", margin: "10px"}} src="assets/logo.svg"></img></a>
				{a_components}				
			</Container>			
		</>
    );
}

export default SideBar;