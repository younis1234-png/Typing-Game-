import React from "react";

const Results = ({ correctResults, wrongResults, countCorrect }) => {
  //   correctResults = { correctResults };
  //   wrongResults = { wrongResults };
  //   countCorrect = { countCorrect };

  return (
    <div className="results">
      <div className="title">
        <p>Correct answers: {countCorrect}</p>
      </div>
      <div className="resultscontainer">
        <div className="correctResults">
          {correctResults.map((correctWord, index) => {
            <div className="row" key={index}>
              <p>{correctWord}</p>
            </div>;
          })}
        </div>
        <div className="wrongResults">
          {wrongResults.map((wrongWord, index) => {
            <div className="row" key={index}>
              <p>{wrongWord}</p>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;
