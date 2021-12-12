import { useState } from "react";
import moment from "moment";
import { ServiceTime } from "./ServiceTime";

let militaryTime;

const MilitaryService = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    }

    let [milStartDate, setMilStartDate] = useState("");
    let [milEndDate, setMilEndDate] = useState("");

    //Compute total military time (assuming this time was bought back):
    militaryTime = new ServiceTime(milStartDate, milEndDate);
    militaryTime.computeServiceTime();

    if(militaryTime.startDate !== ""){
      militaryTime.startDate = moment(militaryTime.startDate).format("MMM Do YYYY");
    }
    if(militaryTime.endDate !== ""){
      militaryTime.endDate = moment(militaryTime.endDate).format("MMM Do YYYY");
    }

    return (
        <div>
          <div className="bg-green-100 border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Did you serve in the military?
              </label>
              
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input type="checkbox" name="militaryService" id="militaryService" checked={isChecked} onChange={handleOnChange}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>

            {isChecked && 
                <div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="EODDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Military Start Date
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 lg:col-span-1">
                            <input type="date" name="MilitaryStart" id="MilitaryStart" onChange={(e)=>{setMilStartDate(e.target.value)}}
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">
                            Military Start Date: {militaryTime.startDate}<br></br>
                            Military Retirement Date: {militaryTime.endDate}
                            </p>
                        </div>
                    </div>
            
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="RetireDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Military End Date
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 lg:col-span-1" >
                            <input type="date" name="MilitaryEnd" id="MilitaryEnd" onChange={(e)=>{setMilEndDate(e.target.value)}}
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                            <p>Total Military Time: {militaryTime.years} years {militaryTime.months} months {militaryTime.days} days
                            </p>
                        </div>
                    </div>
                </div>
            }
          </div>
        </div>
    )
}
export default MilitaryService;
export {militaryTime};