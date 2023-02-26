import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <ReactLoading
            type={"spin"}
            color="#ffffff"
            height={"12%"}
            width={"12%"}
            className="loading"
        />
    );
}
