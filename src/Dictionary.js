import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState([]);
   
function handleDictionResponse(response){
     setResult (response.data);
}

function handlePexelsResponse(response){
     setPhotos (response.data.photos);
}

function search(){
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionResponse);

let pexelsApiKey = "kmxj5ck13i841hvMXwZbq7Gka10VezC3uPPPn7Uc8VQrtAO3Z6b6mRdy";
let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers = { Authorization: `${pexelsApiKey}` };
axios.get(pexelsApiUrl,{headers:headers}).then(handlePexelsResponse);

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

</section>
<Result result={result}/>
<Photos photos={photos}/>
</div>
);
} else {
    load();
    return "Loading!"
  }
}