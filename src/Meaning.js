import React from "react";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>
                {props.meaning.partOfSpeech}
            </h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                            <span className="Def">- {definition.definition}</span>
                            <br />
                            <span className="Ex">{definition.example}</span>
                        </p>
                    </div>
                );
            })}

            <p><span className="Def">- {props.meaning.definitions[0].definition}</span> </p>
            <p><span className="Ex">{props.meaning.definitions[0].example}</span></p>
        </div >
    );


}