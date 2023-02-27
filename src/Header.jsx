import React from "react";

export default function Header(props) {
    return (
        <div className="header">
            <div className="header-container">
                <h1 className="header-title">
                    {props.isWatchlist ? `My Watchlist` : `Find your film`}
                </h1>
                <button onClick={props.handleWatchlist} className="watchlist">
                    {props.isWatchlist ? `Search for movies` : `My Watchlist`}
                </button>
            </div>
        </div>
    );
}
