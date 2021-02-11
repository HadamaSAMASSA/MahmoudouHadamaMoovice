import React from 'react';
import '../App.css';

class Card extends React.Component {
    render() {

        const { film } = this.props
        let url = `https://image.tmdb.org/t/p/w300/${film.poster_path}`
        return (
            <>
                <div className="container">
                    <div className="row contour">
                        <div className="col-lg-4 "><img src={url} /></div>
                        <div className="col-lg-4"><h4>{film.title}</h4>  {film.release_date}</div>
                        <div className="col-lg-4">{film.overview}</div>
                    </div>

                </div>


            </>
        )
    }

}

export default Card