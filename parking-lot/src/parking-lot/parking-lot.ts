import type { Level } from "../level";
import type { Vehicle } from "../vehicle";

export class ParkingLot{
    static instance:ParkingLot;
    private levels:Array<Level>
    private constructor(){
        this.levels = []
    }
    static get getInstance(){
        if(ParkingLot.instance) return ParkingLot.instance;
        return ParkingLot.instance = new ParkingLot()
    }
    set addLevel(level:Level){
        this.levels.push(level)
    }
    park(vehicle:Vehicle){
        for(const level of this.levels){
            if(level.park(vehicle)) return true;
        }
        return false;
    }
    unPark(vehicle:Vehicle):boolean{
        for(const level of this.levels){
            if(level.unPark(vehicle)) return true;
        }
        return false;
    }

}