import { ParkingSpot } from "../parking-spot";
import type {  VehicleTypes } from "../vehicle";
import { Vehicle } from "../vehicle";
export class Level {
    private floor: number;
    private spots: Array<ParkingSpot>
    private vehicle_type:VehicleTypes
    private availabe_spots:number
    constructor(floor:number, no_of_spots:number, vehicle_type:VehicleTypes){
        this.floor = floor;
        this.availabe_spots = no_of_spots
        this.vehicle_type = vehicle_type
        this.spots = new Array(no_of_spots)
        this.initSpots()
    }
    private initSpots(){
        for(let index = 0; index<this.spots.length; index++){
           this.spots[index] = new ParkingSpot(index, this.vehicle_type) 
        }
    }
    get availableSpots (){
        return this.availabe_spots
    }
    park(vehicle:Vehicle):boolean{
       if (vehicle.type !== this.vehicle_type || this.availabe_spots === 0) return false; 
        for (const spot of this.spots){
            if(spot.park(vehicle)){
                this.availabe_spots = this.availabe_spots-1;
                return true; 
            } 
        }
        return false
    }
    unPark(vehicle:Vehicle):boolean{
        if(vehicle.type !== this.vehicle_type) return false;
        for(const spot of this.spots){
            if(spot.unPark(vehicle)){
                this.availabe_spots = this.availabe_spots +1;
                return true;
            }
        } 
        return false;
    }
}