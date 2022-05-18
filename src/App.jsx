import React, { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import Dictionary from "./components/Dictionary";
import dictionaryApi from "./api/dictionaryApi";
import "./appStyle.css";
import { DictContext } from "./context/DictContext";

const App = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [saved, setSaved] = useContext(DictContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dictionaryApi({ url: term });
      setResults(response.data);
    };
    term && fetchData();
  }, [term]);

  return (
    <div>
      <Navbar setTerm={setTerm} />
      <div className="dicts-container">
        <Dictionary results={results} defaultExpanded={true} />
        <Dictionary results={saved} defaultExpanded={false} />
      </div>
    </div>
  );
};

export default App;
