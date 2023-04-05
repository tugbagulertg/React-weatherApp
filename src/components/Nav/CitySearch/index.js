import { useFormik } from "formik";
import { useWeather } from "../../../context/WeatherContext";
import validationSchema from "./validation";

function CitySearch() {
  const { setCity } = useWeather();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        city: "",
      },

      onSubmit: (values, { resetForm }) => {
        setCity(values.city.turkishToEnglish());
        resetForm({ values: "" });
        console.log(values.city);
      },
      validationSchema,
    });

  String.prototype.turkishToEnglish = function () {
    return this.replace(/Ğ/g, "G")
      .replace(/ğ/g, "g")
      .replace(/Ü/g, "U")
      .replace(/ü/g, "u")
      .replace(/Ş/g, "S")
      .replace(/ş/g, "s")
      .replace(/İ/g, "I")
      .replace(/ı/g, "i")
      .replace(/Ö/g, "O")
      .replace(/ö/g, "o")
      .replace(/Ç/g, "C")
      .replace(/ç/g, "c");
  };

  return (
    <div className="order-2 sm:order-1">
      <form onSubmit={handleSubmit} className="w-full h-20">
        <label htmlFor="city"></label>
        <input
          name="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Arama yap"
          className="w-full rounded-lg h-10 md:h-11 pl-3 dark:bg-indigo-100 dark:placeholder-indigo-500
          focus:outline-none focus:border-indigo-500 focus:text-indigo-600 dark:focus:bg-indigo-100 shadow-md shadow-indigo-800/70"
        />
        {errors.city && touched.city && (
          <h6 className="error mt-2 pl-1 text-indigo-600 dark:text-white/80">
            {errors.city}
          </h6>
        )}
      </form>
    </div>
  );
}

export default CitySearch;
