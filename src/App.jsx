import React from "react";
import Header from "./Header";
import Body from "./Body";
import Search from "./Search";
import defaultData from "./data.js";

export default function App() {
    // localStorage.clear();
    const [inputValue, setInputValue] = React.useState("");
    const [detailData, setDetailData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [fetchErr, setFetchErr] = React.useState("");

    function handleSearch1() {
        event.preventDefault();
        console.log(`${inputValue.split(" ").join("+")}`);

        fetch(
            `https://www.omdbapi.com/?s=${inputValue
                .split(" ")
                .join("+")}&apikey=6ad4ebf4`
        )
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                if (data.Response === "False") {
                    console.log("No response");
                    setFetchErr(data.Error);
                    console.log(fetchErr);
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
                        setDetailData(data);
                        console.log(detailData);
                    });
                }
            });
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

            <Body detailData={detailData} fetchErr={fetchErr} />

            {/* // {isLoading ? <Body detailData={detailData} /> : <p>loading...</p>} */}
        </div>
    );
}
