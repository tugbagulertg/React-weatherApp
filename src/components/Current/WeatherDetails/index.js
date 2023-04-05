import React from "react";
import { useWeather } from "../../../context/WeatherContext";
import tempHigh from "../../../assets/high-temperature.png";
import tempLow from "../../../assets/low-temperature.png";
import humidity from "../../../assets/humidity.png";
import pressure from "../../../assets/pressure.png";
import sunrise from "../../../assets/sunrise.png";
import sunset from "../../../assets/sunset.png";
import windFlat from "../../../assets/windsock.png";
import upload from "../../../assets/up-arrow.png";

function WeatherDetails() {
  const { weather, language, tempType } = useWeather();

  // We convert it to 24 time zone because the sunset time is given in 12 time zone.
  const sunsetTime = weather.forecast.forecastday[0].astro.sunset;
  const convertTime12to24 = (time12) => {
    const [time, modifier] = time12.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  };
  const convertedSunsetTime = convertTime12to24(sunsetTime);
  // ***

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4 md:gap-3 xl:gap-4 text-indigo-500">
      {/* Tempreatures */}
      <div className="flex flex-col justify-center bg-white dark:bg-zinc-950 py-2 md:py-0 px-5 sm:px-8 md:px-5 lg:px-4 rounded-2xl ">
        <h2 className="text-center text-lg lg:text-base font-semibold mt-2  lg:my-0 mb-2 lg:mb-4 ">
          {language === "tr" ? "SICAKLIK" : "TEMPREATURES"}
        </h2>

        <div className="flex items-center justify-between mb-1 lg:mb-3">
          <img src={tempHigh} alt="" className="w-10" />
          <h3 className="dark:text-white">
            {language === "tr" ? <span>Maks</span> : <span>Max</span>}:
            {tempType === "C"
              ? ` ${Math.floor(
                  weather.forecast.forecastday[0].day.maxtemp_c
                )}°C`
              : ` ${Math.floor(
                  weather.forecast.forecastday[0].day.maxtemp_f
                )}°F`}
          </h3>
        </div>

        <div className="flex items-center justify-between mb-2 lg:mb-0 lg:mb-0">
          <img src={tempLow} alt="" className="w-10" />
          <h3 className="dark:text-white">
            <span>Min: </span>
            {tempType === "C"
              ? ` ${Math.floor(
                  weather.forecast.forecastday[0].day.mintemp_c
                )}°C`
              : ` ${Math.floor(
                  weather.forecast.forecastday[0].day.mintemp_f
                )}°F`}
          </h3>
        </div>
      </div>

      {/* Sunrise & Sunset */}
      <div className="flex flex-col justify-center bg-white dark:bg-zinc-950 py-2 md:py-0 px-5 sm:px-8 md:px-5 lg:px-0 rounded-2xl">
        <h2 className="text-center text-lg lg:text-base font-semibold mt-2 lg:my-0 mb-2 lg:mb-4 px-0 xl:px-1">
          {language === "tr" ? "GÜN DOĞUMU & GÜN BATIMI" : "SUNRISE & SUNSET"}
        </h2>

        <div className="flex items-center justify-between mb-1 lg:mb-3 lg:px-4">
          <img src={sunrise} alt="" className="w-10" />
          <h3 className="dark:text-white">
            {weather.forecast.forecastday[0].astro.sunrise.slice(0, 5)}
          </h3>
        </div>

        <div className="flex items-center justify-between mb-2 lg:mb-0 lg:px-4">
          <img src={sunset} alt="" className="w-10" />
          <h3 className="dark:text-white">{convertedSunsetTime}</h3>
        </div>
      </div>

      {/* Humidity */}
      <div className="flex flex-col justify-center bg-white dark:bg-zinc-950 py-2 md:py-0 px-5 sm:px-8md:px-5 lg:px-4 rounded-2xl">
        <h2 className="text-center text-lg lg:text-base font-semibold mt-2 lg:my-0 mb-2 lg:mb-4 ">
          {language === "tr" ? " NEM & BASINÇ" : "HUMIDITY & PRESSURE"}
        </h2>

        <div className="flex items-center justify-between mb-1 lg:mb-3">
          <img src={humidity} alt="" className="w-10" />
          <h3 className="dark:text-white">{weather.current.humidity}%</h3>
        </div>

        <div className="flex items-center justify-between mb-2 lg:mb-0">
          <img src={pressure} alt="" className="w-10 px-0.5" />
          <h3 className="dark:text-white">{weather.current.pressure_mb} mb</h3>
        </div>
      </div>

      {/* Wind Status */}
      <div className="flex flex-col justify-center bg-white dark:bg-zinc-950 py-2 md:py-0 px-5 sm:px-8 md:px-5 lg:px-4 rounded-2xl">
        <h2 className="text-center text-lg lg:text-base font-semibold mt-2 lg:my-0 mb-2 lg:mb-4  ">
          {language === "tr" ? "RÜZGAR DURUMU" : "WIND STATUS"}
        </h2>

        <div className="flex items-center justify-between mb-1 lg:mb-3">
          <img src={windFlat} alt="" className="w-10" />
          <h3 className="dark:text-white">
            {weather.current.wind_kph} {language === "tr" ? "km/sa" : "kph"}
          </h3>
        </div>

        <div className="flex items-center justify-between mb-2 lg:mb-0">
          <h3 className="dark:text-white">{weather.current.wind_degree}°</h3>
          <img
            className="w-10 p-1"
            style={{ transform: `rotate(${weather.current.wind_degree}deg)` }}
            src={upload}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
