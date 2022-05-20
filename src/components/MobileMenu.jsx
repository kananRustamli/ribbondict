import React, { useState } from "react";
import Dictionary from "./Dictionary";
import XIcon from "./x";

const MobileMenu = ({ saved, sidebarOpen, setSidebarOpen }) => {
  console.log(sidebarOpen);
  return (
    <div className={`mobile-container ${sidebarOpen && "open"}`}>
      <div className="mobile-topbar">
        <div className="mobile-close" onClick={() => setSidebarOpen(false)}>
          <XIcon />
        </div>
      </div>
      <Dictionary results={saved} defaultExpanded={false} responsive="" />
    </div>
  );
};

export default MobileMenu;
