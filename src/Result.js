import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h1>{props.result.word}</h1>
          <Phonetic props={props.result.phonetic}/>
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}