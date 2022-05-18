import React, { useState, useEffect, useContext, useRef } from "react";
import BookmarkIcon from "./BookmarkIcon";
import { DictContext } from "../context/DictContext";

const Word = ({ word, defaultExpanded }) => {
  const [saved, setSaved] = useContext(DictContext);
  const [isSaved, setIsSaved] = useState(false);
  const [expand, setExpand] = useState(defaultExpanded);
  const wordBodyRef = useRef();

  const saveUnsave = (wordToSave) => {
    const newArray = saved.filter((obj) => obj.word === wordToSave.word);
    if (newArray.length) {
      setSaved(saved.filter((w) => w.word !== wordToSave.word)); // REMOVE
    } else {
      setSaved([wordToSave, ...saved]); // ADD
    }
  };

  useEffect(() => {
    const newArr = saved.filter((obj) => obj.word === word.word);
    if (newArr.length !== 0) {
      setIsSaved(true); // REMOVE
    } else {
      setIsSaved(false); // ADD
    }
    console.log(word);
  }, [word, isSaved, saved]);

  return (
    <div className="word-container">
      <div className="word-header">
        <h2
          className={`word-name ${!expand && "wn-small"}`}
          onClick={() => setExpand(!expand)}
        >
          {word.word}
        </h2>
        <span className={`word-phonetic ${!expand && "wp-hidden"}`}>
          {word.phonetic}
        </span>
        <span className="bookmark-span" onClick={() => saveUnsave(word)}>
          <BookmarkIcon isSaved={isSaved} />
        </span>
      </div>
      <div
        className="word-body"
        ref={wordBodyRef}
        style={
          expand
            ? wordBodyRef.current && {
                height: wordBodyRef.current.scrollHeight + "px",
              }
            : { height: 0 }
        }
      >
        {word.meanings.map((meaning, index) => (
          <div key={`mean${index}`}>
            <p className="meanings-pos">{meaning.partOfSpeech}</p>
            <div className="meanings-body">
              {meaning.definitions.map((def, index) => (
                <div key={`dfs${index}`} className="dfs-body">
                  <p className="dfs-def">{def.definition}</p>
                  {def.example && <p className="dfs-example">{def.example}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Word;
