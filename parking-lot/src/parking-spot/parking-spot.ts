import { Vehicle, VehicleTypes } from "../vehicle";
class ParkingSpot{
    private spot_number: number;
    private type_supported = VehicleTypes.Car;
    private is_available = true;
    private parked_vehicle:Vehicle | null= null;
    constructor(spot_number:number, type_supported: VehicleTypes){
        this.spot_number = spot_number;
        this.type_supported = type_supported
    }
    get isAvailable(){
        return this.is_available;
    }
    get typeSupported(){
        return this.type_supported;
    }
    get spotNumber(){
        return this.spot_number;
    }
    get parkedVechile(){
        return this.parked_vehicle;
    }
    private set isAvailable(value:boolean){
        this.is_available = value;
    }
    park(vehicle:Vehicle){
        if (this.type_supported !== vehicle.type || this.isAvailable === false) return false;
        this.parked_vehicle = vehicle
        this.isAvailable = false;
        return true
    }
    unPark(vehicle:Vehicle){
        if(this.isAvailable || vehicle.license_plate !== this.parkedVechile?.license_plate) return false;
        this.parked_vehicle = null;
        this.isAvailable = true;
        return true;
    }
}
export {ParkingSpot}