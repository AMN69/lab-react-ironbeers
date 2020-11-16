import React, { Component }from "react";
import axios from 'axios';
import { Switch, Route, Link } from "react-router-dom";
import AllBeers from './AllBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

class Home extends Component {
    state = {
        allBeers: []
    }

    componentDidMount = async () => {
        const beers = await axios.get("https://api.punkapi.com/v2/beers");
        // axios devuelve un objeto con la respuesta dentro de "data"
        this.setState({ allBeers: beers.data});
    }

    render () {
        return (
            <div className="routes">
                <Link to="/beers">
                    <img src="../../public/allbeers.png" alt="all beers img"></img>
                    <h1>All Beers</h1>
                </Link>
                <Link to="/random-beer">
                    <img src="../../public/allbeers.png" alt="random beer img"></img>
                    <h1>Ramdom Beer</h1>
                </Link>
                <h1>New Beer</h1>
                <Switch>
                    <Route exact path='/beers' render={props => (
                        <AllBeers allBeers={this.state.allBeers}/>
                    )}/>
                    <Route exact path='/random-beer' component={RandomBeer}/>
                    <Route exact path='/new-beer' component={NewBeer}/>
                </Switch>
            </div>
        )
    }

    // render () {
    //     console.log("countries", this.state.countries)
    //     return (
    //       <div className="App">
    //         <Navbar />
    //         <CountriesList countries={this.state.countries}/>
    //           <Switch> 
    //             <Route exact path="/:id" render={props => (
    //               <CountryDetails countries={this.state.countries} {...props}/>
    //             )}/>
    //           </Switch>
    
    
    //       </div>
    //     );
    //   }



};

export default Home;