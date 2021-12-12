import moment from "moment";

class ServiceTime {
    years = 0;
    months = 0;
    days = 0;
    //Constructor to create new objects of this type:
    constructor(startDate, endDate) {
      this.startDate = startDate;
      this.endDate = endDate;
    }

    computeServiceTime() {
      //Use the moment.js to compute the time difference between the start and end dates of service:
      if(this.startDate === "" || this.endDate === ""){
        this.years = 0;
        this.months = 0;
        this.days = 0;
      }else {
        const startTime = moment(this.startDate);
        const endTime = moment(this.endDate);
        const timeDifference = endTime.diff(startTime);
        const finalServiceTime = moment.duration(timeDifference);

        //assign values to the object properties:
        this.years = finalServiceTime.years();
        this.months = finalServiceTime.months();
        this.days = finalServiceTime.days() + 1;
      }
    }
};

export {ServiceTime};