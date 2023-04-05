import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { useTheme } from "./ThemeContext";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const { theme } = useTheme();
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("İstanbul");
  const [cityName, setCityName] = useState("İstanbul");
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "tr"
  );
  const [tempType, setTempType] = useState(
    localStorage.getItem("tempType") || "C"
  );
  const [daysTr, setDaysTr] = useState([
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ]);
  const [daysEn, setDaysEn] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);

  const newDay = new Date();
  const today = newDay.getDay();

  const getWeatherDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&hour=24&lang=${language}`
      );
      setWeather(data);
    } catch (err) {
      alert("Geçerli bir şehir ismi giriniz.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("language", language);
    localStorage.setItem("tempType", tempType);
    getWeatherDetails();
    console.log(language, tempType);
  }, [city, language, tempType]);

  if (loading) {
    return (
      <div className={theme}>
        <div
          className="App grid h-full	min-h-screen place-items-center bg-gradient-to-t from-indigo-100 to-indigo-400 
    dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-600 text-5xl text-white"
        >
          {language === "tr" ? "Yükleniyor..." : "Loading..."}
        </div>
      </div>
    );
  }

  const values = {
    weather,
    setWeather,
    city,
    setCity,
    cityName,
    setCityName,
    daysTr,
    setDaysTr,
    daysEn,
    setDaysEn,
    today,
    newDay,
    language,
    setLanguage,
    tempType,
    setTempType,
    getWeatherDetails,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

const useWeather = () => useContext(WeatherContext);
export { useWeather, WeatherProvider };
