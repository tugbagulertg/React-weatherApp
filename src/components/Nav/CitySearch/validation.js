import * as yup from "yup";

let validations = yup.object().shape({
  city: yup
    .string()
    .required("Şehir alanı boş bırakılamaz.")
    .matches(
      /^([A-Za-zğüşöçıİĞÜŞÖÇ\s]*)$/gi,
      "Şehir ismi sadece harflerden oluşmalıdır."
    ),
});

export default validations;
