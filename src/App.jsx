import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Header from "./Header";
import Body from "./Body";
import Search from "./Search";

// import "./App.css";

export default function App() {
    return (
        <div className="app-container">
            <Header />
            <Search />
            <Body />
        </div>
    );
}
