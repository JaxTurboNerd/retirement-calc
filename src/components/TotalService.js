import { Retiree } from "./Retiree"; 
import { fedServiceTime } from "./ServiceDates";
import { militaryTime } from "./MilitaryService";

const TotalService = ()=> {
    const totalYears = fedServiceTime.years + militaryTime.years;
    const totalMonths = fedServiceTime.months + militaryTime.months;
    const totalDays = fedServiceTime.days + militaryTime.days;
   console.log("fed years", fedServiceTime.years);
    console.log("total years", totalYears);
    return (
        <div className="ml-5">
            <p>
                Total Service Computation: {totalYears} years {totalMonths} months {totalDays} days
            </p>
        </div>
    )
}

export default TotalService;