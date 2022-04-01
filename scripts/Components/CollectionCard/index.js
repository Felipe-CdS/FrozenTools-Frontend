import React from "react";

import { Card, CardPicture, CardInfo, CardLinks, CardTitle } from "./styles.js";

function CollectionCard(props){
    return(
        <Card >
        	<CardPicture href="/" picture="assets/card-placeholder.gif"></CardPicture>  
            <CardTitle href="/">Sprite Club Official</CardTitle>                            
            <CardInfo>                
                <div>
                    <span>Supply:   7777</span>
                    <span>Holders:  3812</span>
                </div>
                <div>
                    <span>Floor:   100.9</span>
                    <span>Volume:  480K</span>
                </div>                                                                                       
            </CardInfo>
            <CardLinks>
                <a href="https://opensea.io/collection/spriteclub"><img src="assets/opensea.svg"></img></a>
                <a href="https://twitter.com/spriteclubNFT" ><img src="assets/twitter.svg"></img></a>
                <button><img src="assets/heart.svg" style={{filter: "invert(100%) brightness(1000%)"}}></img></button>
            </CardLinks>
        </Card>
    );
}

export default CollectionCard;