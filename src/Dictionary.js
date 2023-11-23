import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState({});
   

function handleResponse(response){
     console.log(response.data[0]);
     setResult(response.data[0]);
}

function search(event) {
        event.preventDefault();

        let apiKey = "eac360db5fc86ft86450f3693e73o43f";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

function handleKeywordChange(event){
     setKeyword(event.target.value);

    }
return(
<div className="Dictionary">
<form onSubmit={search}>
    <input type="search" onChange={handleKeywordChange}/>
</form>
<Result result={result}/>
</div>
);
}