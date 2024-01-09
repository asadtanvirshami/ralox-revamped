import { RocketIcon } from "@radix-ui/react-icons";
import React, { memo } from "react";

const PlainCard = ({ title, description, animation, icon, mode, withIcon }) => {
  return (
    <div
      className={
        mode === "dark"
          ? `lg:mb-0 opacity-90 bg-black lg:col-7 p-4 lg:p-6 rounded-2xl`
          : mode === "light"
          ? `lg:mb-0 opacity-90  bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 lg:col-7 p-4 lg:p-6 rounded-2xl`
          : `lg:mb-0 opacity-90 bg-transparent lg:col-7 p-4 lg:p-6 rounded-2xl`
      }
      data-aos={animation}
    >
      <div className="flex">
        {withIcon == true && <>{icon}</>}
        <h1
          className={
            mode == "dark"
              ? `font-body text-3xl text-left  md:text-2xl   lg:text-3xl mb-5 text-gray-300 `
              : `font-body text-3xl text-left  md:text-2xl   lg:text-3xl mb-5 text-black `
          }
        >
          {title}
        </h1>
      </div>
      <article
        className={
          mode == "dark"
            ? `font-oswald lg:text-xl text-gray-300 text-justify `
            : `font-oswald lg:text-xl text-black text-justify `
        }
      >
        {description}
      </article>
    </div>
  );
};

export default memo(PlainCard);