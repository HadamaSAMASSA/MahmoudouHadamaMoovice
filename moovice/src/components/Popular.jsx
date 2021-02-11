import React from 'react';

class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [
                
            ],
        }
    }

    getMoovies(movie){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={20f40c1217f9ae14d7e03e4b99bca61b}")
        .then((reponse) => reponse.json())
        .then((apiReponse) => {
            this.setState ({
                movies: apiReponse
            });
        }
        )  
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }

}
     
export default Popular