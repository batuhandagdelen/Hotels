import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { type FC } from "react";
import { INITIAL_VALUES, INPUT_FIELDS } from "../../constants";
import type { PlaceFormValues } from "../../types";
import { useCreatePlace } from "../../services/hooks";
import { PLACE_SCHEMA } from "../../constants/schemas";

const FormPage: FC = () => {
  const { mutate, isPending } = useCreatePlace();

  const handleSubmit = (values: PlaceFormValues) => {
    console.log(values);
    mutate(values);
  };

  return (
    <div className="max-w-3l mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl bg-linear-to-r from-blue-600 to-blue-500 bg-clip font-bold md:text-4xl mb-3">
            Yeni Konaklama Noktası Oluştur
          </h1>
          <p className="text-zinc-600">
            Aşağıdaki formu doldurarak yeni bir konaklama noktası
            ekleyebilirsiniz
          </p>
        </div>

        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={PLACE_SCHEMA}
        >
          <Form className="grid gap-8">
            {INPUT_FIELDS.map((item) => (
              <div key={item.name} className="field relative">
                <label
                  htmlFor={item.name}
                  className="font-semibold text-zinc-700 text-sm"
                >
                  {item.label}
                </label>

                <Field {...item} className="input" />

                <ErrorMessage
                  name={item.name}
                  component="div"
                  className="text-red-500 text-sm absolute -bottom-6 font-medium"
                />
              </div>
            ))}
            <button
              disabled={isPending}
              type="submit"
              className="btn-primary mt-3 text-lg"
            >
              {isPending ? "Yükleniyor" : "Oluştur"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormPage;
