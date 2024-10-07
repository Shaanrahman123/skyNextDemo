import React, { useEffect, useState } from "react";
import NcInputNumber from "../../heroSection/NcInputNumber";
import { TrashIcon } from "@heroicons/react/24/outline";

const GuestsInputMobile = ({ className = "", onGuestDataChange }) => {
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(1);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(0);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(0);

  const handleChangeData = (value, type) => {
    if (type === "adults") {
      setGuestAdultsInputValue(value);
    }
    if (type === "children") {
      setGuestChildrenInputValue(value);
    }
    if (type === "infant") {
      setGuestInfantsInputValue(value);
    }
  };

  const totalGuests =
    guestChildrenInputValue + guestAdultsInputValue + guestInfantsInputValue;

  useEffect(() => {
    const payload = {
      adults: guestAdultsInputValue,
      children: guestChildrenInputValue,
      infant: guestInfantsInputValue,
    };
    onGuestDataChange(payload);
  }, [guestAdultsInputValue, guestChildrenInputValue, guestInfantsInputValue]);

  return (
    <div className={`flex flex-col relative p-5 ${className}`}>
      <span className="mb-5 block font-semibold text-xl sm:text-2xl">
        {`Who's coming?`}
      </span>

      <div className="mb-6">
        <NcInputNumber
          className="w-full"
          defaultValue={guestAdultsInputValue}
          onChange={(value) => handleChangeData(value, "adults")}
          max={10}
          min={1}
          label="Adults"
        />
        <NcInputNumber
          className="w-full mt-4"
          defaultValue={guestChildrenInputValue}
          onChange={(value) => handleChangeData(value, "children")}
          max={4}
          label="Children"
          desc="Ages 2–12"
        />

        <NcInputNumber
          className="w-full mt-4"
          defaultValue={guestInfantsInputValue}
          onChange={(value) => handleChangeData(value, "infant")}
          max={4}
          label="Children"
          desc="Ages 2–12"
        />
      </div>

      {/* 
            <button
                type="button"
                className="w-full mt-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                onClick={handleAddRoom}
            >
                Add Room
            </button> */}
    </div>
  );
};

export default GuestsInputMobile;
