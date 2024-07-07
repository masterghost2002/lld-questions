import { Level } from "./src/level";
import { ParkingLot } from "./src/parking-lot"
import { VehicleTypes } from "./src/vehicle";
import { Car } from "./src/vehicle/car";

function main(){
    const parking_lot = ParkingLot.getInstance;
    const leveltwo = new Level(2, 2, VehicleTypes.Car)
    parking_lot.addLevel = leveltwo;

    const myCar = new Car("123")
    const myCar2 = new Car("13")
    if(parking_lot.park(myCar)){
        console.log("Parking success")
    }
    console.log(parking_lot.unPark(myCar))
}
main()