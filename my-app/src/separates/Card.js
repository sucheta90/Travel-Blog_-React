import React from 'react';
import Map from '../images/marker.png'
import Colorado from '../images/Colorado.png'
import Smoky from '../images/smokyMount.jpg'
import BigIsland from '../images/bigIsland.jpeg'

export default function Card(props){
    let image
    if(props.imageUrl == 'Smoky'){
        image = Smoky;
    }
    else if(props.imageUrl== 'Colorado'){
        image = Colorado;
    }
    else {
        image = BigIsland;
    }
    return(
        <div className="card container-fluid">
            <div className="row">
             <div className="col-md-6">
                <img src={image} className="photos img-fluid rounded"/>
             </div>   
            
            <div className="main--section col-md-6 align-items-center">
            <h2 className="card--title">{props.title}</h2>
            <div className="location--info">
            <span className="map"><a href={props.googleMapUrl} target="_blank"><img src={Map} class="logo--map"/></a></span>
            <span className="location">{props.location}</span>
            </div>
            <span className="dates text-muted">{props.startDate}</span>
            <span> - </span>
            <span className="dates text-muted">{props.endDate}</span>
            <p className="description lead">{props.description}</p>
            </div>
            </div>
            

        </div>
    )
}

        