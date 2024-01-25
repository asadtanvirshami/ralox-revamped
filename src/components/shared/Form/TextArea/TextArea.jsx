import React from "react";
import { Controller } from "react-hook-form";

const TextArea = ({ placeholder, name, type, disabled, register, control }) => {
  return (
    <>
      <Controller
        name={`${name}`}
        defaultValue=""
        control={control}
        {...register(`${name}`)}
        render={({ field }) => (
          <textarea
            disabled={disabled}
            type={type}
            name={name}
            placeholder={placeholder}
            className="bg-black h-[100px] border-white border w-full mt-3 rounded-md p-[9px] lg:h-[150px]"
            {...field}
          />
        )}
      />
    </>
  );
};

export default TextArea;
