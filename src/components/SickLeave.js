
class SickLeave {
    #balance = 0;
    months = 0;
    days = 0;
    percent = 0.0;

    constructor(balance){
        this.balance = balance;
    }

    calcSickLeave(){
        this.months = Math.round((this.balance/5.8)/30);
        if(Math.round((((this.balance/5.8)/30) - this.months)*30) < 0){
            this.days = 0;
        }else{
            this.days = Math.round((((this.balance/5.8)/30) - this.months)*30);
        }
        this.percent = (this.months * 0.0833).toFixed(2)
    }
}
export {SickLeave}