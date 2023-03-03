import React from "react";
import data from "./data";

export default function Search(props) {
    return (
        <form action="POST" className="search-container">
            <label htmlFor="input">
                <img
                    className="search-icon"
                    src="/image/search.svg"
                    alt="search-icon"
                />
            </label>
            <input
                id="input"
                type="text"
                name="filmName"
                placeholder="Blade Runner"
                onChange={props.handleChange1}
                value={props.inputValue}
            />
            <button
                onClick={props.handleSearch1}
                className="search-btn"
                disabled={props.isLoading}
            >
                Search
            </button>
        </form>
    );
}

// api:6ad4ebf4
