"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import BusDateBox from "./BusDateBox";
import { useDispatch, useSelector } from "react-redux";
import {
  busSearchAction,
  clearBusSearchReducer,
} from "@/Redux/busSearch/busSearchAction";
import BusLocationInputFrom from "./BusLocationInputFrom";
import BusLocationInputTo from "./BusLocationInputTo";

const BusSearchForm = () => {
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const reducerState = useSelector((state) => state);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearBusSearchReducer());
  }, []);

  const handleFromSelect = (location) => {
    setFromCity(location);
  };
  const handleToSelect = (location) => {
    setToCity(location);
  };

  const handleDateChange = (dates) => {
    setDepartDate(dates.startDate);
  };

  const handleSubmit = async () => {
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      DateOfJourney: dayjs(departDate).format("YYYY/MM/DD"),
      DestinationId: fromCity.CityId,
      OriginId: toCity.CityId,
    };

    console.log(payload, "clicked");
    sessionStorage.setItem(
      "busOnewayData",
      JSON.stringify([
        {
          CityId: fromCity.CityId,
          CityName: fromCity.CityName,
          __v: fromCity.__v,
          _id: fromCity._id,
        },
        {
          CityId: toCity.CityId,
          CityName: toCity.CityName,
          __v: toCity.__v,
          _id: toCity._id,
        },
        departDate,
      ])
    );

    router.push("/busresult");
    dispatch(busSearchAction(payload));
  };

  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex rounded-full shadow-xl  bg-white ">
        <BusLocationInputFrom
          className="flex-1"
          desc="Departure City"
          onLocationSelect={handleFromSelect}
        />
        <div className="self-center border-r border-slate-200 h-8"></div>
        <BusLocationInputTo
          className="flex-1"
          desc="Arrival City"
          onLocationSelect={handleToSelect}
        />
        <div className="self-center border-r border-slate-200 h-8"></div>
        <BusDateBox
          className="flex-1"
          onSubmit={handleSubmit}
          onDateChange={handleDateChange}
        />
      </form>
    );
  };

  return renderForm();
};

export default BusSearchForm;
