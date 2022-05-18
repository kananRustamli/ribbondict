import React, { createContext, useState, useEffect } from "react";

export const DictContext = createContext();

export const DictProvider = (props) => {
  const [saved, setSaved] = useState(
    JSON.parse(localStorage.getItem("savedWords")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedWords", JSON.stringify(saved));
    console.log("LCOAL ", JSON.parse(localStorage.getItem("savedWords")));
  }, [saved]);
  return (
    <DictContext.Provider value={[saved, setSaved]}>
      {props.children}
    </DictContext.Provider>
  );
};
