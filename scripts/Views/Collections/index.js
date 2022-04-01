import React from 'react'

import { GlobalStyle } from "../../Main/GlobalStyles";
import { MainContainer, MainFrame, CollectionsGrid } from './styles';
import SideBar from '../../Components/SideBar';
import TopBar from '../../Components/TopBar';
import CollectionCard from '../../Components/CollectionCard';

class Collections extends React.Component {

    collections_array = [];

    constructor(props){
        super();

            for(let j = 0; j < 15; j++){
                this.collections_array[j] = <CollectionCard />
            }
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
                            {this.collections_array}
                        </CollectionsGrid>                         
                    </MainFrame>                    
                </div>                			       
            </MainContainer>
        );  
    }
}
export default Collections;

