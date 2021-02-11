import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Card from './Card';
import PopularBattle from './Popular-battle';

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }

        
    }

    componentDidMount() {
        console.log("hello")
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20f40c1217f9ae14d7e03e4b99bca61b")
            .then((reponse) => reponse.json())
            .then((apiReponse) => {
                console.log(apiReponse)
                this.setState({
                    movies: apiReponse.results 

                });
            }
        )
    }
    render() {
        return (
            <div>
                {this.state.movies.map((movie,index) => {
                    return <p  key={index}>   <Card film={movie} />   </p> 
                }
                )}

            </div>
        )
    }

}

export default Popular;