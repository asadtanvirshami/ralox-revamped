import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Count = () => {
  return (
    // from-slate-400 via-slate-300 to-slate-400 
    <div className="mt-20 flex-wrap lg:flex-nowrap md:flex-nowrap lg:w-full  mx-auto flex text-white  bg-gradient-to-br from-slate-400 via-slate-100 to-slate-400 p-8 rounded-xl">
      <div className=" lg:w-full mb-8 lg:mb-0 md:mb-0 mx-4 flex  justify-center align-middle items-center">
        <ul className="text-center">
          <li>
            <h3 className="text-xl font-bold text-slate-800">ACTIVE CLIENTS</h3>
          </li>
          <li className="text-4xl text-slate-800 countup-number">
            <CountUp end={20} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </li>
        </ul>
      </div>

      <div className=" md:w-1/2 lg:w-full mb-8 lg:mb-0 md:mb-0 mx-4 flex  justify-center align-middle items-center">
        <ul className="text-center">
          <li>
            <h3 className="text-xl font-bold text-slate-800">PROJECTS DONE</h3>
          </li>
          <li className="text-4xl text-slate-800 countup-number">
            <CountUp end={20} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </li>
        </ul>
      </div>

      <div className=" md:w-1/2 lg:w-full mb-8 lg:mb-0 md:mb-0 mx-4 flex  justify-center align-middle items-center">
        <ul className="text-center">
          <li>
            <h3 className="text-xl font-bold text-slate-800">PROJECT ADVISORS</h3>
          </li>
          <li className="text-4xl text-slate-800 countup-number">
            <CountUp end={10} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </li>
        </ul>
      </div>

      <div className=" md:w-1/2 lg:w-full mb-8 lg:mb-0 md:mb-0 mx-4 flex  justify-center align-middle items-center">
        <ul className="text-center">
          <li>
            <h3 className="text-xl font-bold text-slate-800">GLORIOUS YEARS</h3>
          </li>
          <li className="text-4xl text-slate-800 countup-number ">
            <CountUp end={1} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Count;
