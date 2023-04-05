import React from "react";
import CitySearch from "./CitySearch";
import Settings from "./Settings";

function Nav() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 md:mb-2 ">
      <CitySearch />
      <Settings />
    </div>
  );
}

export default Nav;
