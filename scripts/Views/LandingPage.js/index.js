import React from 'react'

import { GlobalStyle } from "../../Main/GlobalStyles";
import { MainContainer, MainFrame } from './styles';
import SideBar from '../../Components/SideBar';
import TopBar from '../../Components/TopBar';

class LandingPage extends React.Component {
    render(){
        return(
            <MainContainer >
                <GlobalStyle />
                <div>
                    <SideBar route="home" />  
                </div>	
                <div>
                    <TopBar />

                    <MainFrame>
                        <h1>Trading NFTs? Welcome home.</h1>
                        <h6>Discover and analyze the best NFTs on the market here.</h6>
                    </MainFrame>                    
                </div>                			       
            </MainContainer>
        );  
    }
}
export default LandingPage;

