//import React from "react";
import moment from "moment";
import { useState } from "react";
import {ServiceTime} from "./ServiceTime";

let fedServiceTime;

const ServiceDates = () => {
    let [startDate, setStartDate] = useState("");
    let [endDate, setEndDate] = useState("");
    let [userName, setUserName] = useState(null);

    //ServiceTime.computeServiceTime(startDate, endDate);
    fedServiceTime = new ServiceTime(startDate, endDate);
    fedServiceTime.computeServiceTime();
    console.log("Total days:", fedServiceTime.totalDays);

    if(fedServiceTime.startDate !== ""){
      fedServiceTime.startDate = moment(fedServiceTime.startDate).format("MMM Do YYYY");
    }
    if(fedServiceTime.endDate !== ""){
      fedServiceTime.endDate = moment(fedServiceTime.endDate).format("MMM Do YYYY");
    }

    return (
        <div>
          <div className="bg-blue-300 border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Full Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2 lg:col-span-1">
                <input type="text" name="ownerName" id="ownerName" onChange={(e)=>{setUserName(e.target.value)}}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div>
                <p>{userName}</p>
              </div>
            </div>
    
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="EODDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Enter On Date (EOD)
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2 lg:col-span-1">
                <input type="date" name="EODDate" id="EODDate" onChange={(e)=>{setStartDate(e.target.value)}}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  EOD: {fedServiceTime.startDate}<br></br>
                  Retirement Date: {fedServiceTime.endDate}
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="RetireDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Retirement Date
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2 lg:col-span-1">
                <input type="date" name="RetireDate" id="RetireDate" onChange={(e)=>{setEndDate(e.target.value)}}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Total Federal Service: {fedServiceTime.years} years {fedServiceTime.months} months {fedServiceTime.days} days
                </p>
              </div>
            </div>
          </div>
        </div>
      )
}

export default ServiceDates;
export {fedServiceTime};