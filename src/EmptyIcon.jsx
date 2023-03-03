import React from "react";

export default function EmptyIcon(props) {
    return (
        <div className="empty-movie-container">
            {!props.fetchErr && <img src="/image/movie-icon.png" alt="" />}
            {props.fetchErr ? <p>{props.fetchErr}</p> : <p>Start exploring</p>}
        </div>
    );
}
