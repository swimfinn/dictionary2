import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiKey = `09604979-6b69-4bfc-9a27-677673bdd2ab`;
        let apiUrl = `https://www.dictionaryapi.com/api/v3/references/learners/json/${keyword}?key=${apiKey}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input className="Search" placeholder="Word Search..." type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    );
}