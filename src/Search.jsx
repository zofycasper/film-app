import React from "react";
import data from "./data";

export default function Search() {
    const [movieData, setMovieData] = React.useState(
        JSON.parse(localStorage.getItem("searchResultArray"))
    );
    const [inputValue, setInputValue] = React.useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSearch() {
        event.preventDefault();

        fetch(
            `https://www.omdbapi.com/?s=${inputValue
                .split(" ")
                .join("+")}&apikey=6ad4ebf4`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem("searchResultArray", JSON.stringify(data));
            });

        setMovieData(JSON.parse(localStorage.getItem("searchResultArray")));

        let movieIds = [];
        let detailData = [];

        const searchResult = movieData.Search;
        console.log(movieIds);
        searchResult.map((item) => {
            movieIds.push(item.imdbID);
        });

        movieIds.map((item) => {
            fetch(`https://www.omdbapi.com/?i=${item}&apikey=6ad4ebf4`)
                .then((res) => res.json())
                .then((data) => {
                    detailData.push(data);
                    localStorage.setItem(
                        "detailData",
                        JSON.stringify(detailData)
                    );
                });
        });

        // JSON.parse(localStorage.getItem("detailData"));
    }

    return (
        <form action="POST" className="search-container">
            <label htmlFor="input">
                <img
                    className="search-icon"
                    src="../public/image/search.svg"
                    alt="search-icon"
                />
            </label>
            <input
                id="input"
                type="text"
                name="filmName"
                placeholder="Blade Runner"
                onChange={handleChange}
                value={inputValue}
            />
            <button onClick={handleSearch} className="search-btn">
                Search
            </button>
        </form>
    );
}

// api:6ad4ebf4
