import React, { Component }from "react";
import axios from 'axios';

class RandomBeer extends Component {
    state = {
        randomBeer: []
    }

    componentDidMount = async () => {
        const randomBeer = await axios.get("https://api.punkapi.com/v2/beers/random")
        // axios devuelve un objeto con la respuesta dentro de "data"
        this.setState({ randomBeer: randomBeer.data});
    }

    render () {
        return (
            <div className="divrandombeer">
                <img src="/Users/andreumartineznuevo/OneDrive/Andreu/Ironhack/course/1311-ironbeers/lab-react-ironbeers/public/logobeer.png" alt="logo beer image"></img>
                <div className="randombeers">
                    <img src={this.state.randomBeer.image_url} alt="random beer image"></img>
                    <p>{this.state.randomBeer.name}</p>
                    <p>{this.state.randomBeer.tagline}</p>  
                    <p>{this.state.randomBeer.first_brewed}</p>    
                    <p>{this.state.randomBeer.attenuation_level}</p>
                    <p>{this.state.randomBeer.description}</p>
                    <p>{this.state.randomBeer.contributed_by}</p>  
                </div>
            </div>
        )
    }
}

export default RandomBeer;
