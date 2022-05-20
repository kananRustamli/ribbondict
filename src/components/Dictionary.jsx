import React from "react";
import Word from "./Word";

const Dictionary = ({ results, defaultExpanded, responsive }) => {
  return (
    <div className={`dict-container ${responsive}`}>
      {results.length ? (
        results.map((result, index) => (
          <Word key={index} word={result} defaultExpanded={defaultExpanded} />
        ))
      ) : (
        <div className="empty-container">
          <h1 className="empty-text">
            {defaultExpanded
              ? "Your search results will appear here"
              : "Click the ribbon icon of any word to save here."}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
