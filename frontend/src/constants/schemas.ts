import * as yup from "yup";

export const PLACE_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("İsim alanı zorunludur")
    .min(3, "İsim en az 3 karakter olmalıdır")
    .max(40, "İsim en fazla 40 karakter olmalıdır"),

  location: yup
    .string()
    .required("Konum alanı zorunludur")
    .min(3, "Konum en az 3 karakter olmalıdır")
    .max(40, "Konum en fazla 40 karakter olmalıdır"),

  address: yup
    .string()
    .required("Adres alanı zorunludur")
    .min(3, "Adres en az 3 karakter olmalıdır")
    .max(100, "Adres en fazla 100 karakter olmalıdır"),
  description: yup
    .string()
    .required("Açıklama alanı zorunludur")
    .min(10, "Açıklama en az 10 karakter olmalıdır")
    .max(200, "Açıklama en fazla 200 karakter olmalıdır"),

  amenities: yup
    .string()
    .required("Özellikler alanı zorunludur")
    .min(3, "Özellikler en az 3 karakter olmalıdır")
    .max(80, "Özellikler en fazla 80 karakter olmalıdır"),

  rating: yup
    .number()
    .required("Puan zorunludur")
    .min(1, "Puan en az 1 olmalıdır")
    .max(5, "Puan en fazla 5 olmalıdır"),

  price_per_night: yup
    .number()
    .required("Fiyat zorunludur")
    .positive("Fiyat pozitif olmalıdır")
    .max(99999, "Fiyat en fazla 99999 olmalıdır"),

  availability: yup.boolean(),
});
