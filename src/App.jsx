import React from "react";
import Header from "./Header";
import Body from "./Body";
import Search from "./Search";
import data from "./data.js";

export default function App() {
    // localStorage.clear();
    const [inputValue, setInputValue] = React.useState("");
    const [detailData, setDetailData] = React.useState(
        JSON.parse(localStorage.getItem("detailData")) || []
    );
    const [isLoading, setIsLoading] = React.useState(false);
    const [movieData, setMovieData] = React.useState(
        JSON.parse(localStorage.getItem("searchResultArray")) || data
    );

    React.useEffect(() => {
        getDetailData();
    }, movieData);

    function handleSearch1() {
        event.preventDefault();

        fetch(
            `https://www.omdbapi.com/?s=${inputValue
                .split(" ")
                .join("+")}&apikey=6ad4ebf4`
        )
            .then((res) => res.json())
            .then((data) => {
                let result = data.Search;
                localStorage.setItem(
                    "searchResultArray",
                    JSON.stringify(result)
                );
                setMovieData(result);
                getDetailData();
            });
    }

    async function getDetailData() {
        let movieIds = movieData.map((item) => {
            return item.imdbID;
        });

        let newDetail = [];

        for (let i = 0; i < movieIds.length; i++) {
            let response = await fetch(
                `https://www.omdbapi.com/?i=${movieIds[i]}&apikey=6ad4ebf4`
            );
            let data = await response.json();
            newDetail.push(data);
        }

        localStorage.setItem("detailData", JSON.stringify(newDetail));
        setDetailData(newDetail);
    }

    function handleChange1(e) {
        setInputValue(e.target.value);
    }

    return (
        <div className="app-container">
            <Header />
            <Search
                handleSearch1={handleSearch1}
                handleChange1={handleChange1}
                inputValue={inputValue}
            />
            {isLoading ? (
                <div>Loading...</div>
            ) : detailData && detailData.length > 0 ? (
                <Body detailData={detailData} />
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}
