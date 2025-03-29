import React, { FC } from "react";
import { initialValues, sortOptions } from "../../utils/constants";
import { usePlaces } from "../../utils/service";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();

  const locations = [...new Set(data?.map((i) => i.location))];

  const handleChange = (name: string, value: string): void => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10">
      <div className="field">
        <label htmlFor="">Nereye Gitmek İstiyorsunuz?</label>
        <select
          className="input"
          
          onChange={(e) => handleChange("location", e.target.value)}

          value={searchParams.get("location") || ""}

        >
          <option value={""}>Seçiniz</option>

          {locations?.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="">konaklama yerini adina gore ara ?</label>
        <input
          type="text"
          placeholder="Seaside Villa ?"
          className="input"
          onChange={(e) => handleChange("title", e.target.value)}
          value={searchParams.get("title") || ""}
        />
      </div>

      <div className="field">
        <label> Siralama Ölçütleri</label>
        <select
          className="input"
          value={searchParams.get("order") || ""}
          onChange={(e) => handleChange("order", e.target.value)}
        >
          {sortOptions.map((i) => (
            <option value={i.value} key={i.value}>
              {" "}
              {i.label}{" "}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setSearchParams({})}
          type="reset"
          className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700 transition-all duration-300  cursor-pointer"
        >
          {" "}
          filtreleri temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
