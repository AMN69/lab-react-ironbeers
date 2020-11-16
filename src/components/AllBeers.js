import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllBeers = (props) => {
    const allBeers = props.allBeers;
        
    return (
        <div className="divallbeers">
            <img src="/Users/andreumartineznuevo/OneDrive/Andreu/Ironhack/course/1311-ironbeers/lab-react-ironbeers/public/logobeer.png" alt="logo beer image"></img>
            {allBeers.map((eachBeer, index) => { 
                console.log("eachBeer: ", eachBeer)
                console.log("eachBeer name: ",eachBeer.name)
                return ( 
                    <Link to="/random-beer"> 
                        <div className="allbeers" key={index}>
                            <img src={eachBeer.image_url} alt="beer image"></img>
                            <p>{eachBeer.name}</p>
                            <p>{eachBeer.tagline}</p>  
                            <p>{eachBeer.contributed_by}</p>  
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default AllBeers;