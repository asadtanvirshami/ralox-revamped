import React from "react";
import { Controller } from "react-hook-form";

const Input = ({ placeholder, name, type, disabled, register, control }) => {
  return (
    <>
      <Controller
        name={`${name}`}
        defaultValue=""
        control={control}
        {...register(`${name}`)}
        render={({ field }) => (
          <input
            disabled={disabled}
            type={type}
            name={name}
            placeholder={placeholder}
            className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
            {...field}
          />
        )}
      />
    </>
  );
};

export default Input;
