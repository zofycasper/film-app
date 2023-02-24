import React from "react";
import Card from "./Card";
import EmptyIcon from "./EmptyIcon";
import data from "./data";

export default function Body(props) {
    // JSON.parse(localStorage.getItem("detailData"))
    const parsedData = JSON.parse(localStorage.getItem("detailData"));

    const [movieData, setMovieData] = React.useState(parsedData);

    const cardEl = movieData.map((item) => {
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
            />
        );
    });

    function handleAdd() {
        console.log(JSON.parse(localStorage.getItem("detailData"))[0]);
    }

    return (
        <div className="body-container">
            {/* <EmptyIcon /> */}
            <div className="card-container">{cardEl}</div>
        </div>
    );
}
