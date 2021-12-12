
import { useState } from "react";
import { SickLeave } from "./SickLeave";

const AgeLeave = ()=> {
    let [sickLeaveBalance, setSickLeaveBalance] = useState(0);
    let [retirementAge, setRetirementAge]= useState(0);

   let sickLeave = new SickLeave(sickLeaveBalance);
   sickLeave.calcSickLeave();

    return (
        <div className="bg-red-100 border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
            <div className = "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Age at Retirement
                </label>
                <input type="number" placeholder="0" name="age" id="age" min="0" max="110" maxLength="3" onChange={(e)=>{setRetirementAge(e.target.value)}}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"/>
                <div className="text-sm font-medium">
                    <p>
                        Projected SL Balance at retirement: <br></br>
                        Sick Leave credit: {sickLeave.months} months {sickLeave.days} days <br></br>
                        Sick Leave Annuity percentage: {sickLeave.percent}%
                    </p>
                </div>
            </div>
            <div className = "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                <label htmlFor="leave" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Sick Leave Balance
                    </label>
                <input type="number" placeholder="0" name="leave" id="leave" min="0" maxLength="4" onChange={(e)=>{setSickLeaveBalance(e.target.value)}}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"/>
                
            </div>
        </div>
    )
}

export default AgeLeave;
   