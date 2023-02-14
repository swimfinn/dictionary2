import React from "react";
import Meaning from "./Meaning";
import "./Dictionary.css";

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
        return (
            <div className="Results">
                <h1 className="Word">{props.results.word}</h1>
                <h1><span className="Phon">{props.results.phonetic}</span></h1>
                <br />
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}