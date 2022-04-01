import React from 'react'

import { GlobalStyle } from "../../Main/GlobalStyles";
import { MainContainer, MainFrame } from './styles';
import SideBar from '../../Components/SideBar';
import TopBar from '../../Components/TopBar';

class ProfilePage extends React.Component {
    render(){
        return(
            <MainContainer >
                <GlobalStyle />
                <div>
                    <SideBar route="profile" />  
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
export default ProfilePage;

