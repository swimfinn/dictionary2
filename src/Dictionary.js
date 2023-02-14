import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        // console.log(response.data[0].meaning[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        //documentation: https://api.dictionaryapi.dev/api/v2/entries/en/<word>

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input className="Search" autoFocus={true} placeholder="Word Search..." type="search" onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    );
}