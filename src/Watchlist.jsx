import React from "react";
import EmptyWatchlist from "./EmptyWatchlist";
import Card from "./Card";

export default function Watchlist(props) {
    const [myWatchlist, setMyWatchlist] = React.useState(
        JSON.parse(localStorage.getItem("watchlist")) || []
    );

    React.useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(myWatchlist));
    }, [myWatchlist]);

    let cardEl = [];
    React.useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(myWatchlist));
    }, [myWatchlist]);

    function handleRemove(id) {
        console.log(id);
        setMyWatchlist((prevWatchlist) => {
            return prevWatchlist.filter((item) => {
                return item.imdbID != id;
            });
        });
    }
    if (myWatchlist) {
        cardEl = myWatchlist.map((item) => {
            return (
                <Card
                    key={item.imdbID}
                    handleRemove={handleRemove}
                    img={item.Poster}
                    title={item.Title}
                    year={item.Year}
                    runTime={item.Runtime}
                    rating={item.imdbRating}
                    genre={item.Genre}
                    plot={item.Plot}
                    id={item.imdbID}
                    isWatchlist={props.isWatchlist}
                />
            );
        });
    } else {
        cardEl = [];
    }

    return (
        <div className="body-container">
            {cardEl.length > 0 ? (
                <div className="card-container">{cardEl}</div>
            ) : (
                <EmptyWatchlist
                    fetchErr={props.fetchErr}
                    isWatchlist={props.isWatchlist}
                    backToSearch={props.backToSearch}
                />
            )}
        </div>
    );
}
