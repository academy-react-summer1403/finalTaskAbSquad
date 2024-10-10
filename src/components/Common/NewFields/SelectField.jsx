import React, { useState } from "react";
import TitleSpan from "./TitleSpan";

const SelectField = ({ options, filterTitle, Icon }) => {
  const [deleteOption, setDeleteOption] = useState("keep");
  return (
    <>
      <div className="flex flex-col justify-start items-center  ">
        <TitleSpan title={filterTitle} Icon={Icon} />
        <select
          onInput={() => {
            setDeleteOption("delete");
          }}
          className="bg-primaryGray  w-full h-12 rounded-2xl pr-5"
        >
          {deleteOption == "keep" && (
            <option defaultValue="انتخاب کنید...">انتخاب کنید...</option>
          )}
          {options.map((it, index) => {
            return (
              <option key={index} value={it.name}>
                {it.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectField;
