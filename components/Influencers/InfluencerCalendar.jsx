import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const InfluencerCalendar = ({ setSelected, selected, setDated }) => {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    setSelected({ ...selected, date: value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="inline-block w-full max-w-lg h-full overflow-hidden text-left align-middle transition-all transform bg-transparent shadow-xl">
        <div>
          <p className="text-center mb-6 text-white text-xl">
            Select Time and Day
          </p>
          <Calendar
            className={["one", "two"]}
            value={value}
            onChange={onChange}
          />
          <div className="flex justify-center mt-8">
            <button
              className="h-11 w-40 bg-appYellow-100 rounded text-black text-lg hover:bg-opacity-50"
              onClick={() => setDated(true)}
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    </Transition.Child>
  );
};

export default InfluencerCalendar;
