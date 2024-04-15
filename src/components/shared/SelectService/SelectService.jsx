import React, { memo } from "react";
import { Controller } from "react-hook-form";
import { getServices } from "@/api/Services";
import { useQuery } from "react-query";

import { Spinner, Select, SelectItem } from "@nextui-org/react";

const SelectService = ({ register, control, setValue }) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["status"],
    enabled: true,
    queryFn: () => getServices(),
  });

  if (isLoading) {
    return (
      <Select
        placeholder="Select Status"
        labelPlacement="outside"
        className="max-w-full mt-2 text-white"
        variant="bordered"
        radius="sm"
        size="lg"
        name="service"
      >
        <SelectItem>
          <Spinner
            className="h-96"
            size="lg"
            label="Loading..."
            color="warning"
          />
        </SelectItem>
      </Select>
    );
  }

  if (isError) {
    return <p>Error fetching statuses</p>;
  }
  console.log(data);
  return (
    <>
      <Controller
        name={"service"}
        defaultValue={[]}
        control={control}
        {...register("service")}
        render={({ field }) => (
          <Select
            aria-label="service"
            placeholder="Select Service"
            labelPlacement="outside"
            className="max-w-full mt-2 text-white"
            variant="bordered"
            selectionMode="multiple"
            radius="sm"
            size="lg"
            name={"service"}
            {...field}
            onChange={(e) => {
              field.onChange([e.target.value]);
            }}
          >
            {data.payload.map((item) => (
              <SelectItem
                className="text-white"
                key={item.id}
                value={[item.id]}
              >
                {item.name}
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </>
  );
};

export default memo(SelectService);
