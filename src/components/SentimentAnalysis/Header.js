import React, { useState } from "react";
import HomeButton from "../HomeButton";

var smile = require("./images/smiley.png");

function Header() {
  const [currText, changeCurrText] = useState("Enter The text");
  const getSentiment = () => {
    console.log(currText);
  };
  return (
    <div>
      <div id="sentiment-heading-div">
        <h1 id="sentiment-heading">Sentiment Analysis</h1>
        <img id="smile" src={smile} alt="smile"></img>
      </div>
        <div id="sentiment-homebtn">
            <HomeButton />
        </div>
      <div id="header2" className="ui icon input" data-children-count="1">
        <input
          type="text"
          placeholder={currText}
          name="sentiment"
          id="my_input"
          onChange={(event) => changeCurrText(event.target.value)}
        ></input>
        <button className="ui basic button" onClick={getSentiment}>
          <i className="smile outline icon"></i>
          Analyze
        </button>
      </div>
      <br></br>
      <div id="sentiment-out">
        <div className="ui segment" id="out-segment">
          <i className="smile outline icon"></i>
          <p id="pos">NA</p>
        </div>
        <div className="ui segment" id="out-segment">
          <i className="meh outline icon"></i>
          <p id="neu">NA</p>
        </div>
        <div className="ui segment" id="out-segment">
          <i className="frown outline icon"></i>
          <p id="neg">NA</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
