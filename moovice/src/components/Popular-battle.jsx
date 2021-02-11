import React from 'react';
import Card from './Card';


class PopularBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentBattle: 0,
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
                {this.state.movies
                .slice( 0,2 )
                .map((movie,index) => {
                    return <p  key={index}>   <Card film={movie} />   </p> 
                }
                )}
            </div>
        )
    }
    
    

   
}
     
export default PopularBattle