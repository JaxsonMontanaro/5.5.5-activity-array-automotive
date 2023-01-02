//this includes the vehicle class as a module

const VehicleModule = require('./vehicle').Vehicle

//this shows how to call from this module...

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadpassenger(num) {
        if (this.passenger < this.maximumPassengers) () =>
            console.log('Room avalable!')
    }

    start() {
        if (this.fuel > 0) {
            console.log("The engine has started.");
            return this.started == true
        }
        else {
            console.log("No fuel :(");
            return this.started = false;
        }
    }


    scheduleService() {
        if (this.mileage > 30000) () =>
            maintenance == true
        return this.scheduleService;
    }

}

let mercurySedan = ("Mecury", "Sedan", "1965", "color", "mileage");
mercurySedan.start()
mercurySedan.loadPassenger(5)
mercurySedan.stop()
mercurySedan.checkService()

console.log(mercurySedan)