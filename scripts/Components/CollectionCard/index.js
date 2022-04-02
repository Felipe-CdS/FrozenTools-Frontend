import React from "react";

import { Card, CardPicture, CardInfo, CardLinks, CardTitle } from "./styles.js";

function CollectionCard(props){
    return(
        <Card >
        	<CardPicture href="/" picture={props.img_url}></CardPicture>  
            <CardTitle href="/">{props.name}</CardTitle>                            
            <CardInfo>                
                <div>
                    <span>Supply:<br/>{props.supply}</span>
                    <span>Holders:<br/>{props.holders}</span>
                </div>
                <div>
                    <span>Floor:<br/>{props.floor}</span>
                    <span>Volume:<br/>{props.volume}</span>
                </div>                                                                                       
            </CardInfo>
            <CardLinks>
                <a href={"https://opensea.io/collection/" + props.opensea_slug}><img src="assets/opensea.svg"></img></a>
                <a href={"https://twitter.com/" + props.twitter_username}><img src="assets/twitter.svg"></img></a>
                <button><img src="assets/heart.svg" style={{filter: "invert(100%) brightness(1000%)"}}></img></button>
            </CardLinks>
        </Card>
    );
}

export default CollectionCard;