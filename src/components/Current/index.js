import React from "react";
import WeatherDetails from "./WeatherDetails";
import DailyCard from "./DailyCard";

function Current() {
  return (
    <>
      <div className="px-3 sm:px-0 py-6 md:py-8 lg:py-6 bg-white dark:bg-zinc-950 w-2/5 rounded-xl w-full text-indigo-500 ">
        <DailyCard />
      </div>
      <WeatherDetails />
    </>
  );
}

export default Current;
