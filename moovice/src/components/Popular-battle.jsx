import React from 'react';

class PopularBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentBattle: 0,
        }

        
    }
    

    render(){
        return(
            <div>
                 <p>Bonjour  PopularBattle</p>
            </div>
        )
    }

}
     
export default PopularBattle