import React from "react";
import axios from "axios";

import { Container, SearchBar, StatsDiv, StatsLine, StyledButton } from "./styles.js";

class TopBar extends React.Component {

	state = {
		eth_price: Number = 0,
		block_number: Number = 0,
		gas_price: Number = 0
	}

	async componentDidMount(){
		let api_string = "http://frosttools.herokuapp.com/eth-info";
        let response = await axios.get(api_string).then((resp) => resp.data);
		console.log(response);
		this.setState({eth_price: response.eth_price});
		this.setState({block_number: response.block_number});
		this.setState({gas_price: response.gas_price});
		
		console.log(response);
	}

    render(){
		return(
			<Container >
				<SearchBar>
					<img src="./assets/magnifying-glass.svg"></img>
					<input placeholder="Search by collection name or address..." ></input>
				</SearchBar>
	
				<StatsDiv>
					<StatsLine>    
						<img style={{width: "18px", height: "18px"}} src="./assets/block.svg"></img>            
						<p>{this.state.block_number}</p>						
					</StatsLine>
	
					<StatsLine>        
						<img style={{width: "20px", height: "20px"}} src="./assets/ethereum.svg"></img>                
						<p>${this.state.eth_price}</p>
					</StatsLine>
						
					<StatsLine>                    
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-3.5 text-gray-700 dark:text-white mr-0.5"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
						<p>{this.state.gas_price} Gwei</p>
					</StatsLine>
	
					<StyledButton><img src="./assets/notification.svg"></img></StyledButton>					
				</StatsDiv>					
			</Container>
		);
	}
}

export default TopBar;