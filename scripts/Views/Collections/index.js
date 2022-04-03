import React from 'react'
import axios from 'axios';
import { GlobalStyle } from "../../Main/GlobalStyles";
import { MainContainer, MainFrame, CollectionsGrid } from './styles';
import SideBar from '../../Components/SideBar';
import TopBar from '../../Components/TopBar';
import CollectionCard from '../../Components/CollectionCard';

class Collections extends React.Component {

    state = {
        loading: true,
        collections_array: []
    }

    async componentDidMount(){
        console.log("API requests...");
        let holder = [];
        let api_string = "https://frosttools.herokuapp.com/collection/info/all";

        let response = await axios.get(api_string).then((resp) => resp.data.data); //fix this return on backend

        for(let j = 0; j < response.length; j++){
            let collection_data = response[j]; 
            holder.push(
                <CollectionCard
                    name             = {collection_data.name}
                    img_url          = {collection_data.image_url}
                    opensea_slug     = {collection_data.opensea_slug}
                    twitter_username = {collection_data.twitter_username  ? collection_data.twitter_username  : ""}
                    supply           = {collection_data.total_supply      ? collection_data.total_supply      : "-----"}
                    holders          = {collection_data.holders           ? collection_data.holders           : "-----"}
                    floor            = {collection_data.floor_price       ? collection_data.floor_price       : "-----"}
                    volume           = {collection_data.total_volume      ? collection_data.total_volume      : "-----"}
                />
            );
        }

        this.setState({collections_array: holder});
        console.log(response);
    }

    render(){
        return(
            <MainContainer >
                <GlobalStyle />
                <div>
                    <SideBar route="collections" />  
                </div>

                <div>
                    <TopBar />
                    <MainFrame>
                        <h1>-Your Favorite Collections: </h1>
                        <h6 style={{color: "gray", fontSize: "20px", marginBottom: "2rem"}}>You don't have any favorite collections yet... </h6>
                        <h1>-Our Collections: </h1>
                        <CollectionsGrid>
                            {this.state.collections_array}
                        </CollectionsGrid>                         
                    </MainFrame>                    
                </div>                			       
            </MainContainer>
        );  
    }
}
export default Collections;

