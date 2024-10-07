"use client";
import React, { useEffect, useState } from "react";
import { clearHolidayReducer } from "@/Redux/OnePackageSearchResult/actionOneSearchPackage";
import HolidayLocationInput from "./HolidayLocationInput";
import HolidayDateRange from "./HolidayDateRange";
import HolidayGuestInput from "./HolidayGuestInput";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearPackageData } from "@/Redux/SearchPackage/actionSearchPackage";

const HolidaySearchForm = () => {
  const [travellers, setTravellers] = useState([]);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const reducerState = useSelector((state) => state);

  console.log(reducerState, "reducer state");

  const dispatch = useDispatch();

  const router = useRouter();

  const handleRoomDataChange = (roomsData) => {
    setTravellers(roomsData);
  };

  const handleLocationSelect = (location) => {
    setSelectedFrom(location);
  };

  useEffect(() => {
    dispatch(clearPackageData());
  }, []);

  const handleDateChange = (dates) => {
    setCheckinDate(dates.startDate);
    setCheckoutDate(dates.endDate);
  };

  const handleSubmit = async () => {
    if (selectedFrom) {
      router.push(`/packageResult?type=cities&destination=${selectedFrom}`);
    }
  };

  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex rounded-full shadow-xl  bg-white ">
        <HolidayLocationInput
          className="flex-[1.5]"
          onLocationSelect={handleLocationSelect}
        />
        <div className="self-center border-r border-slate-200 h-8"></div>
        <HolidayDateRange className="flex-1" onDateChange={handleDateChange} />
        <div className="self-center border-r border-slate-200  h-8"></div>
        <HolidayGuestInput
          className="flex-1"
          onSubmit={handleSubmit}
          onRoomDataChange={handleRoomDataChange}
        />
      </form>
    );
  };

  return renderForm();
};

export default HolidaySearchForm;
