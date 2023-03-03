import React from "react";

export default function EmptyWatchlist(props) {
    return (
        <div className="empty-watchlist-container">
            <p>Your watchlist is looking a little empty...</p>
            <button onClick={props.backToSearch} className="add-watch-btn">
                <img src="/image/add.png" alt="add-btn" />
                Let's add some movies!
            </button>
        </div>
    );
}
