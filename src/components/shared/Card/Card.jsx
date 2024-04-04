import React from "react";
//
const Card = ({
  icon,
  animation,
  withIcon,
  title,
  description,
  className,
  mode,
}) => {
  return (
    <div className={className} data-aos={animation}>
      <div className="flex">
        {withIcon == true && <>{icon}</>}
        <h1
          className={
            mode == "dark"
              ? ` text-3xl opacity-100 text-left font-semibold  md:text-2xl   lg:text-3xl mb-5 text-black `
              : `text-3xl text-left opacity-100  md:text-2xl   lg:text-3xl mb-5 text-black `
          }
        >
          {title}
        </h1>
      </div>
      <article
        className={
          mode == "dark"
            ? `lg:text-[16px] tracking-tighter text-black text-justify `
            : `lg:text-xl tracking-tighter  text-black text-justify `
        }
      >
        {description}
      </article>
    </div>
  );
};

export default Card;
