import { VehicleTypes } from "./vehicle-types";
abstract class Vehicle{
    public license_plate : string;
    public type:VehicleTypes = VehicleTypes.Car;
    constructor (license_plate:string, type:VehicleTypes){
        this.license_plate = license_plate;
        this.type = type
    }
}
export {Vehicle};