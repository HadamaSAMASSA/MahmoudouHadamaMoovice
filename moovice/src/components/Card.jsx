import React from 'react';

class Card extends React.Component {
    render() {

        const { film } = this.props
        let url = `https://image.tmdb.org/t/p/w300/${film.poster_path}`
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">{film.title}</div>
                        <div className="col-4 col-md-4">{film.release_date}</div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-4"><img src={url} /></div>
                        <div className="col-6 col-md-4">{film.overview}</div>
                    </div>
                </div>

            </>
        )
    }

}

export default Card