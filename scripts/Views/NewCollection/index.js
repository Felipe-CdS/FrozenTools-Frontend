import React from 'react'

import { GlobalStyle } from "../../Main/GlobalStyles";
import { MainContainer, MainFrame } from './styles';
import SideBar from '../../Components/SideBar';
import TopBar from '../../Components/TopBar';

class NewCollection extends React.Component {
    render(){
        return(
            <MainContainer >
                <GlobalStyle />
                <div>
                    <SideBar route="new-collection" />  
                </div>	
                <div>
                    <TopBar />
                    <MainFrame>
                    </MainFrame>                    
                </div>                			       
            </MainContainer>
        );  
    }
}
export default NewCollection;

