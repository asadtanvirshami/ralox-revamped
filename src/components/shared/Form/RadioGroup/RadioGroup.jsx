import React from "react";
import { Controller } from "react-hook-form";
import { Radio, RadioGroup } from "@nextui-org/react";

const RadioNext = ({ label,name, orientation,register,control, color, options }) => {
  return (
    <>
    <Controller
      name={`${name}`}
      defaultValue=""
      control={control}
      {...register(`${name}`)}
      render={({ field }) => (
        <RadioGroup
        orientation={orientation}
        label={label}
        color={color}
        {...field}
        className="bg-black border-white border w-full mt-3 rounded-md p-[9px]"
      >
        {options.map((item, i) => {
          return (
            <Radio value={item.value} description={item.description}>
              {item.name}
            </Radio>
          );
        })}
      </RadioGroup>
      )}
    />
  </>
  );
};

export default RadioNext;
