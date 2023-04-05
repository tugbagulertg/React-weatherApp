import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useWeather } from "../../../context/WeatherContext";
import sunny from "../../../assets/day.png";
import moon from "../../../assets/moon.png";

function Settings() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, tempType, setTempType } = useWeather();

  return (
    <div className="flex justify-around sm:justify-end items-center order-1 sm:order-2 pr-2 sm:mb-9 md:mb-8">
      {/* Language Change Button */}
      <div className="settings mr-4 lg:mr-6">
        <button
          className="rounded-md bg-indigo-500 text-indigo-600 text-bold py-0.5 w-9 text-base font-bold text-white 
          "
          onClick={() => {
            setLanguage(language === "tr" ? "en" : "tr");
          }}
        >
          {language === "tr" ? "EN" : "TR"}
        </button>
      </div>
      {/* Temperature Type Change Button */}
      <div className="settings flex items-center mr-4 lg:mr-6">
        <label className="text-lg font-medium text-gray-900 dark:text-gray-300 mr-1">
          °C
        </label>
        <label className="relative inline-flex items-center cursor-pointer mr-1">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={tempType === "C" ? 0 : 1}
            onChange={() => {}}
            onClick={() => {
              setTempType(tempType === "C" ? "F" : "C");
            }}
          />
          <div
            className="w-11 h-6 bg-indigo-500 peer-focus:outline-none 
           rounded-full peer 
           peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
           after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
           after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
           peer-checked:bg-indigo-500"
          ></div>
        </label>
        <label className="text-lg font-medium text-gray-900 dark:text-gray-300">
          °F
        </label>
      </div>

      {/* Theme Change Button */}
      <div className="settings mr-4 lg:mr-6">
        <button
          className="rounded-full  border-none border-zinc-300 p-1 w-9 
          transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          onClick={() => {
            setTheme(theme === "" ? "dark" : "");
          }}
        >
          {theme ? (
            <img src={sunny} alt="" className="w-9" />
          ) : (
            <img src={moon} alt="" className="w-9" />
          )}
        </button>
      </div>

      {/* Github Link */}
      <div className="settings">
        <a href="https://github.com/tugbagulertg" target="blank">
          <i className="fa-brands fa-github text-[#57534e] text-indigo-500 text-3xl"></i>
        </a>
      </div>
    </div>
  );
}

export default Settings;
