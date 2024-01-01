import React,{memo} from "react";

const Letter = ({ description, title, button_text }) => {
  return (
    <div classNameName="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
      <div classNameName="relative overflow-hidden rounded-2xl bg-gray-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="text-gray-400 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            ></path>
            <path
              className="text-gray-600 text-opacity-40"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            ></path>
          </svg>
        </div>
        <div className="relative">
          <div className="sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-rose-100">
              {description}
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="blocks md:w-1/4 rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
              tabindex="0"
            >
              {button_text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Letter);
