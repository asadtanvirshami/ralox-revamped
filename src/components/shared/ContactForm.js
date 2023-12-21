import { Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import React from "react";

const ContactForm = () => {
    const animals = [
        {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
        {label: "Dog", value: "dog", description: "The most popular pet in the world"},
        {label: "Elephant", value: "elephant", description: "The largest land animal"},
        {label: "Lion", value: "lion", description: "The king of the jungle"},
        {label: "Tiger", value: "tiger", description: "The largest cat species"},
        {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
        {
          label: "Dolphin",
          value: "dolphin",
          description: "A widely distributed and diverse group of aquatic mammals",
        },
        {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
        {label: "Zebra", value: "zebra", description: "A several species of African equids"},
        {
          label: "Shark",
          value: "shark",
          description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
        },
        {
          label: "Whale",
          value: "whale",
          description: "Diverse group of fully aquatic placental marine mammals",
        },
        {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
        {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
      ];
      
  return (
    <div className="m-5 w-full flex flex-col gap-4">
      <h1 className="text-xl text-gray-300 flex lg:text-6xl font-semibold mb-7">
        What is the most important
      </h1>
      <div className="flex">
        <Input
          type="email"
          variant={"bordered"}
          label="Email"
          className="mr-4"
        />
        <Input type="email" variant={"bordered"} label="Email" />
      </div>
      
          <div className="mt-4 flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Select
                variant={'bordered'}
                label="Favorite Animal"
                placeholder="Select an animal"
                className="max-w-xs"
              >
                {animals.map((animal) => (
                  <SelectItem hideSelectedIcon={true} key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
          </div>
      <div className="mt-4">
        <Textarea
          label="Description"
          variant="bordered"
          placeholder="Enter your description"
          disableAnimation
          classNames={{
            base: "max-w-full",
            input: "resize-y min-h-[40px]",
          }}
        />
      </div>
    </div>
  );
};

export default ContactForm;
