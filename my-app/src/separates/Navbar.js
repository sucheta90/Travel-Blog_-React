import React from 'react';
import Globe from '../images/globe.png'


export default function Navbar(){
    return (
        
        <nav className="navbar align-items-start">
        <img src={Globe} className="globe"/>
        <h3 className="page-title"> my travel journal</h3>
       </nav>
       
    )
    
    
    
}