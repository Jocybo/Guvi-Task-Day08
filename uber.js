class uber {
    constructor(fare = 15, bookingFee = 10, perMile = 4, perMinute = 2, time = 1, _mile = 1) {
        this.fare = fare;
        this.perMile = perMile;
        this.perMinute = perMinute;
        this.bookingFee = bookingFee;
        this.time = time;
        this.mile = time;
    }
    totalPrice(time = this.time, mile = this.mile) {
        console.log(`the total price is RS.${(this.fare)+(this.bookingFee)+
            ((this.perMinute)+(time))+((this.perMile)+(mile))} only`);
    }
}
const car = new uber();
car.totalPrice(20, 100);
car.totalPrice(15, 30);