import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="cover" src={props.img} alt="movie-cover" />
            <div className="first-line">
                <h2 className="movie-title">{props.title}</h2>
                <img
                    className="star-icon"
                    src="/image/star.png"
                    alt="star-icon"
                />
                <p className="rating-score">{props.rating}</p>
            </div>
            <div className="second-line">
                <p className="length">{props.runTime}</p>
                <p className="category">{props.genre}</p>
                {props.isWatchlist ? (
                    <button
                        className="remove-btn"
                        onClick={() => props.handleRemove(props.id)}
                    >
                        <img src="/image/remove.png" alt="remove-button" />
                        Remove
                    </button>
                ) : (
                    <button
                        className="add-btn"
                        onClick={() => props.handleAdd(props.id)}
                    >
                        <img src="/image/add.png" alt="add-button" />
                        Watchlist
                    </button>
                )}
            </div>
            <div className="third-line">{props.plot}</div>
        </div>
    );
}
