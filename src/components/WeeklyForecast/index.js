import React from "react";
import { useWeather } from "../../context/WeatherContext";

function WeeklyForecast() {
  const { weather, daysTr, daysEn, language, tempType } = useWeather();
  console.log(weather);

  return (
    <div>
      {weather && (
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-5 text-indigo-500">
          {weather.forecast.forecastday.map((item, i) => {
            const date = new Date(item.date);
            const day = date.getDay();

            return (
              <li
                key={i}
                className="bg-white dark:bg-zinc-950 rounded-lg flex flex-col justify-start items-center py-3"
              >
                {/* Day */}
                <h3 className="text-2xl md:text-xl font-semibold pt-2 mb-0.5">
                  {language === "tr" ? daysTr[day] : daysEn[day]}
                </h3>

                {/* Date */}
                <h4 className="text md md:text-sm text-slate-400 dark:text-white font-semibold">
                  {language === "tr"
                    ? date.toLocaleDateString("tr-TR")
                    : date.toLocaleDateString("en-US")}
                </h4>

                {/* Weekly Weather Details */}
                <img src={item.day.condition.icon} alt="" className="w-12" />
                <p className="font-medium">
                  {tempType === "C"
                    ? Math.floor(item.day.maxtemp_c)
                    : Math.floor(item.day.maxtemp_f)}
                  ° /
                  {tempType === "C"
                    ? Math.floor(item.day.mintemp_c)
                    : Math.floor(item.day.mintemp_f)}
                  °
                </p>
                <p className="text-slate-400 dark:text-white pb-2 text-center">
                  {item.day.condition.text}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default WeeklyForecast;
