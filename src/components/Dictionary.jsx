import React from "react";
import Word from "./Word";

const Dictionary = ({ results, defaultExpanded }) => {
  return (
    <div className="dict-container">
      {results.length ? (
        results.map((result, index) => (
          <Word key={index} word={result} defaultExpanded={defaultExpanded} />
        ))
      ) : (
        <div className="empty-container">
          <h1 className="empty-text">
            {defaultExpanded
              ? "Search for a word..."
              : "Click the ribbon icon of any word to save here."}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
