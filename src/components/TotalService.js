
import { fedServiceTime } from "./ServiceDates";
import { militaryTime } from "./MilitaryService";
import { sickLeave} from "./AgeLeave";
import moment from "moment";

const TotalService = ()=> {

    let totalYears;
    let totalMonths;
    let totalDays;

    function calcTotalService(){
        let fedDays = moment.duration(fedServiceTime.days, 'd');
        let milDays = moment.duration(militaryTime.days, 'd');
        let sickDays = moment.duration(sickLeave.days, 'd');
        let totalDays = fedDays.add(milDays).days();
        // totalYears = fedServiceTime.years + militaryTime.years;
        // totalMonths = fedServiceTime.months + militaryTime.months + sickLeave.months;
        // totalDays = fedServiceTime.days + militaryTime.days + sickLeave.days;
    }
    
    calcTotalService();
    return (
        <div className="ml-5">
            <p>
                Total Service Computation: {totalYears} years {totalMonths} months {totalDays} days
            </p>
        </div>
    )
}

export default TotalService;