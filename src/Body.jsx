import React from "react";
import Card from "./Card";
import EmptyIcon from "./EmptyIcon";
import data from "./data";

export default function Body(props) {
    // JSON.parse(localStorage.getItem("detailData"))
    const [myWatchlist, setMyWatchlist] = React.useState([]);

    let parsedData = props.detailData;

    let cardEl = [];

    if (props.fetchErr) {
        cardEl = [];
    } else if (props.isWatchlist) {
        cardEl = myWatchlist.map((item) => {
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
            ) : (
                <EmptyIcon fetchErr={props.fetchErr} />
            )}
        </div>
    );
}
