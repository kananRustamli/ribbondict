import React, { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import Dictionary from "./components/Dictionary";
import dictionaryApi from "./api/dictionaryApi";
import MobileMenu from "./components/MobileMenu";

import "./appStyle.css";

import { DictContext } from "./context/DictContext";

const App = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [saved, setSaved] = useContext(DictContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dictionaryApi({ url: term });
      setResults(response.data);
    };
    term && fetchData();
  }, [term]);

  return (
    <main>
      <Navbar setTerm={setTerm} setSidebarOpen={setSidebarOpen} />
      <div className="dicts-container">
        <Dictionary results={results} defaultExpanded={true} responsive="" />
        <Dictionary results={saved} defaultExpanded={false} responsive="hide" />
      </div>
      <MobileMenu
        saved={saved}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </main>
  );
};

export default App;
