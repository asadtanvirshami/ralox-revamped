import React,{memo} from "react";

const Index = ({ tabs, step, handleClick }) => {
  return (
    <div className="flex flex-wrap gap-4 ">
      <div className="w-full md:w-full lg:w-fit rounded-xl ">
        <ul className="flex-none md:flex lg:flex  border border-gray-600  rounded-xl p-1 pt-2 pb-2">
          {tabs.map((tab) => {
            return (
              <li
                onClick={() => {
                  handleClick(tab.id, tab.key, tab.status);
                }}
                className={`cursor-pointer p-1 pl-3 pr-3 md:mr-0 lg:mr-2 rounded-lg text-[11px] lg:text-[12px] ${
                  step === tab.id
                    ? " text-black bg-orange-300 transition-all duration-300"
                    : "text-white transition-all duration-300"
                }`}
              >
                {tab.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default memo(Index);
