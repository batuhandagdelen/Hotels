import React, { useMemo, type ChangeEvent, type FC } from "react";
import { SORT_OPTIONS } from "../../constants";
import { useGetPlaces } from "../../services/hooks";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data } = useGetPlaces();

  const locations = useMemo(
    () => [...new Set(data?.map((item) => item.location))],
    [data],
  );

  const [searchParams, setSearchParams] = useSearchParams();
  // select ve inputtaki değerleri url e aktar

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  const handleClear = () => {
    setSearchParams({});
  };

  return (
    <form className="flex flex-col gap-5 lg:gap-8 mt-15 lg:sticky lg:top-24 bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
      <h2 className="text-xl font-bold text-zinc-800 pb-3 border-b border-zinc-200">
        Filtrele
      </h2>

      <div className="field">
        <label className="label">Nereye gitmek istiyorsunuz?</label>

        <select name="location" className="input" onChange={handleChange}>
          <option value="">Seçiniz</option>
          {locations.map((location) => (
            <option
              key={location}
              value={location}
              selected={location === searchParams.get("location")}
            >
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="label">Konaklama noktası adı?</label>
        <input
          type="text"
          placeholder="örn:Marriott Hotel"
          name="title"
          className="input"
          onChange={handleChange}
          value={searchParams.get("title") || ""}
        />
      </div>
      <div className="field">
        <label className="label">Sıralama</label>

        <select
          name="order"
          className="input"
          onChange={handleChange}
          defaultValue={searchParams.get("order") || ""}
        >
          <option value="">Seçiniz</option>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button
          type="reset"
          className="btn-primary w-full mt-2  "
          onClick={handleClear}
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
