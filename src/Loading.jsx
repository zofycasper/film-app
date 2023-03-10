import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <ReactLoading
            type={"spin"}
            color="#ffffff"
            height={"3rem"}
            width={"3rem"}
            className="loading"
        />
    );
}
