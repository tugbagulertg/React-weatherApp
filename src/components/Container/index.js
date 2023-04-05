import React from "react";
import WeeklyForecast from "../WeeklyForecast";
import Nav from "../Nav";
import Current from "../Current";
import { useTheme } from "../../context/ThemeContext";

function Container() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div
        className="App grid h-full	min-h-screen place-items-center bg-gradient-to-t from-indigo-100 to-indigo-400 
      dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-600"
      >
        <div
          id="container"
          className="rounded-2xl w-[95%] xl:w-5/6 backdrop-blur-5xl bg-white/70 dark:bg-zinc-900 shadow-xl shadow-indigo-600/50 dark:shadow-slate-500/60 my-8 lg:my-0 "
        >
          <div className="px-6 sm:px-8 lg:px-4 xl:px-8 py-9 md:py-12 font-sans">
            <Nav />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-4 xl:gap-9 mb-6 ">
              <Current />
            </div>
            <WeeklyForecast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
