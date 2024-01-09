import React, {memo, useRef, useState } from "react";
import { Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import emailjs from "@emailjs/browser";

import { services} from "@/utils/Options/selectOptions";

import ButtonPrimary from "../Button/Button";

const ContactForm = () => {
  const [condition, setCondition] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v1xftbh",
        "template_4u1jmt9",
        form.current,
        "d5v8gYI0Ev9r_ATt-"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setCondition(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();

  return (
    <>
      <h1 className="text-xl  text-gray-600 flex lg:mr-2 lg:text-[3rem] font-bold mb-7">
        We love coming up with fresh ideas to increase conversions!
      </h1>
      <form
        onSubmit={sendEmail}
        ref={form}
        className=" w-full flex flex-col gap-4"
      >
        <div className="flex">
          <Input
            size="lg"
            type="text"
            variant={"bordered"}
            label="Name"
            className="mr-4 text-gray-600"
            name="user_name"
          />
          <Input
            type="email"
            className=" text-gray-600"
            name="user_email"
            size="lg"
            variant={"bordered"}
            label="Email"
          />
        </div>

        <div className="lg:mt-4 flex w-full flex-wrap md:flex-nowrap md:mb-0 gap-4">
          <Select
            name="user_select"
            variant={"bordered"}
            label="Reason"
            className="max-w-full text-white"
            size="lg"
          >
            {services.map((service) => (
              <SelectItem
              className="text-white"
            
                hideSelectedIcon={true}
                key={service.value}
                value={service.value}
              >
                {service.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="lg:mt-4">
          <Textarea
            name="user_message"
            size="lg"
            label="Description"
            variant="bordered"
            disableAnimation
            className=" text-gray-600"
            classNames={{
              base: "max-w-full",
              input: "resize-y min-h-[40px]",
            }}
          />
        </div>
        <ButtonPrimary
          title={"Send"}
          type={"submit"}
          color={"warning"}
          variant={"flat"}
        />
        {condition && (
          <p className="text-green-400">Thankyou for contacting Algorim</p>
        )}
      </form>
    </>
  );
};

export default memo(ContactForm);
