import React from "react";
import { useWeather } from "../../../context/WeatherContext";

function DailyCard() {
  const { weather, daysTr, daysEn, today, newDay, language, tempType } =
    useWeather();

  // console.log(newDay.getDate());

  return (
    <>
      {weather !== "undefined" && (
        <div className="flex flex-col justify-center items-center">
          {/* CityName */}
          <h1 className="text-4xl sm:text-5xl mt-4 sm:mt-6  md:mt-10 lg:mt-5 font-medium mb-3 sm:mb-0 md:mb-3 lg:mb-2">
            {weather.location.name.toUpperCase()}
          </h1>

          {/* Current Tempreature */}
          <div className="flex items-center pr-0 sm:pr-5 md:pr-10 my-0 md:my-3 lg:my-0">
            <img
              src={weather.forecast.forecastday[0].day.condition.icon}
              alt="todayicon"
              className="w-40"
            />
            <div className="w-40">
              <div className="text-5xl sm:text-7xl font-bold text-start w-40">
                {tempType === "C"
                  ? `${Math.floor(weather.current.temp_c)}°C`
                  : `${Math.floor(weather.current.temp_f)}°F`}
              </div>
              <p className="text-slate-400 dark:text-white text-start mt-3 pl-1 ">
                {language === "tr" ? "Hissedilen: " : "Feels like: "}
                <span>
                  {tempType === "C"
                    ? `${Math.floor(weather.current.feelslike_c)} °C`
                    : `${Math.floor(weather.current.feelslike_f)}°F`}
                </span>
              </p>
            </div>
          </div>

          {/* Day - Date */}
          <h2 className="text-3xl font-medium mb-3 lg:mb-2">
            {language === "tr" ? daysTr[today] : daysEn[today]}
          </h2>
          <p className="text-slate-400 dark:text-white font-semibold mb-2 lg:mb-1">
            {language === "tr"
              ? newDay.toLocaleDateString("tr-TR")
              : newDay.toLocaleDateString("en-US")}
          </p>

          {/* Current Details */}
          <p className="text-slate-400 dark:text-white mb-2 lg:mb-1 text-center">
            {weather.current.condition.text}
          </p>
          <p className="text-slate-400 dark:text-white ">
            {language === "tr" ? "Yağış olasılığı: " : "Chance of Rain: "}
            {weather.forecast.forecastday[0].day.daily_chance_of_rain}%
          </p>
        </div>
      )}
    </>
  );
}

export default DailyCard;
