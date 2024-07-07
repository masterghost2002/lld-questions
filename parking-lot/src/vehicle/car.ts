import { Vehicle } from "./vehicle";
import { VehicleTypes } from "./vehicle-types";
export class Car extends Vehicle{
    constructor(license_plate:string){
        super(license_plate, VehicleTypes.Car)
    }
}