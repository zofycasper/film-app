import React from "react";
import Card from "./Card";
import EmptyIcon from "./EmptyIcon";
import data from "./data";
import EmptyWatchlist from "./EmptyWatchlist";

export default function Body(props) {
    // JSON.parse(localStorage.getItem("detailData"))
    const [myWatchlist, setMyWatchlist] = React.useState(
        JSON.parse(localStorage.getItem("watchlist")) || []
    );

    React.useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(myWatchlist));
    }, [myWatchlist]);

    let parsedData = props.detailData;

    let cardEl = [];

    if (props.fetchErr) {
        cardEl = [];
    } else {
        cardEl = parsedData.map((item) => {
            return (
                <Card
                    key={item.imdbID}
                    handleAdd={handleAdd}
                    img={item.Poster}
                    title={item.Title}
                    year={item.Year}
                    runTime={item.Runtime}
                    rating={item.imdbRating}
                    genre={item.Genre}
                    plot={item.Plot}
                    id={item.imdbID}
                />
            );
        });
    }

    function handleAdd(id) {
        const addItem = parsedData.filter((item) => {
            return item.imdbID === id;
        })[0];
        console.log(addItem);

        setMyWatchlist((prevWatchlist) => [addItem, ...prevWatchlist]);
    }

    console.log(myWatchlist);

    return (
        <div className="body-container">
            {/* <EmptyIcon /> */}
            {cardEl.length > 0 ? (
                <div className="card-container">{cardEl}</div>
            ) : props.isWatchlist && cardEl.length == 0 ? (
                <EmptyWatchlist
                    fetchErr={props.fetchErr}
                    isWatchlist={props.isWatchlist}
                    backToSearch={props.backToSearch}
                />
            ) : (
                <EmptyIcon
                    fetchErr={props.fetchErr}
                    isWatchlist={props.isWatchlist}
                />
            )}
        </div>
    );
}
