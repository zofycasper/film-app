import React from "react";

export default function Header() {
    function handleWatchlist() {
        console.log("watchlist clicked!");
    }

    return (
        <div className="header">
            <div className="header-container">
                <h1 className="header-title">Find your film</h1>
                <button onClick={handleWatchlist} className="watchlist">
                    My Watchlist
                </button>
            </div>
        </div>
    );
}
