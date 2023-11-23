import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);
   

function handleResponse(response){
     setResult(response.data);
}

function search(){
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
}

 function handleSubmit(event) {
    event.preventDefault();
    search();
  }

   function load() {
    setLoaded(true);
    search();
  }

 


function handleKeywordChange(event){
     setKeyword(event.target.value);
    }

    if (loaded) {
return(
<div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>What word do you want to look up?</label>
            <input
              type="search"
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              className="form-control search-input"
              onChange={handleKeywordChange}
            />
          </form>
<div className="hint">
    suggested words: sunset, wine, yoga, tennis...
</div>
</section>
<Result result={result}/>
</div>
);
} else {
    load();
    return "Loading!"
  }
}