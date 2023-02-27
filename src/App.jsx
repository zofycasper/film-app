import React from "react";
import Header from "./Header";
import Body from "./Body";
import Search from "./Search";

import Loading from "./Loading";
import Watchlist from "./Watchlist";

export default function App() {
    // localStorage.clear();
    const [inputValue, setInputValue] = React.useState("");
    const [detailData, setDetailData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [fetchErr, setFetchErr] = React.useState("");
    const [isWatchlist, setIsWatchlist] = React.useState(false);

    function handleSearch1() {
        event.preventDefault();

        setIsLoading(true);

        console.log(`${inputValue.trim().split(" ").join("+")}`);

        fetch(
            `https://www.omdbapi.com/?s=${inputValue
                .trim()
                .split(" ")
                .join("+")}&apikey=6ad4ebf4`
        )
            .then((res) => {
                setFetchErr("");

                console.log(res);
                return res.json();
            })
            .then((data) => {
                if (data.Response === "False") {
                    console.log("No response");
                    setIsLoading(false);
                    setFetchErr(data.Error);
                    console.log(fetchErr);
                    return;
                } else {
                    let result = data.Search;

                    return result;
                }
            })
            .then((result) => {
                if (result) {
                    let movieIds = result.map((item) => {
                        return item.imdbID;
                    });

                    let newDetail = movieIds.map((id) => {
                        return fetch(
                            `https://www.omdbapi.com/?i=${id}&apikey=6ad4ebf4`
                        ).then((res) => res.json());
                    });

                    Promise.all(newDetail).then((data) => {
                        setIsLoading(false);
                        setDetailData(data);
                        console.log(detailData);
                    });
                }
            });
    }

    function handleWatchlist(e) {
        console.log(e);
        setIsWatchlist((current) => !current);
    }

    function handleChange1(e) {
        setInputValue(e.target.value);
    }

    function backToSearch() {
        console.log("back to search!");
        setIsWatchlist(false);
    }

    console.log(isWatchlist);

    return (
        <div className="app-container">
            <Header
                handleWatchlist={handleWatchlist}
                isWatchlist={isWatchlist}
            />
            {!isWatchlist && (
                <Search
                    handleSearch1={handleSearch1}
                    handleChange1={handleChange1}
                    inputValue={inputValue}
                    isLoading={isLoading}
                />
            )}
            {isLoading ? (
                <Loading />
            ) : isWatchlist ? (
                <Watchlist
                    isWatchlist={isWatchlist}
                    backToSearch={backToSearch}
                />
            ) : (
                <Body
                    detailData={detailData}
                    fetchErr={fetchErr}
                    isWatchlist={isWatchlist}
                />
            )}
            {/* {isLoading ? <Body detailData={detailData} /> : <Loading />} */}
        </div>
    );
}
