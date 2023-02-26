import React from "react";
import Card from "./Card";
import EmptyIcon from "./EmptyIcon";
import data from "./data";

export default function Body(props) {
    // JSON.parse(localStorage.getItem("detailData"))

    let parsedData = props.detailData;

    const cardEl = parsedData.map((item) => {
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

    // console.log("body render");
    // console.log(parsedData);
    // console.log(cardEl);

    function handleAdd() {
        console.log(JSON.parse(localStorage.getItem("detailData"))[0]);
    }

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
