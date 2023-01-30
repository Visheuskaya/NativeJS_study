import {GovernmentBuildingsType, HouseType} from "../02/02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) =>{
return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) =>{
    return houses.map(h => h.address.street.title)
}

export const grettingMessages = (houses: Array<HouseType>) => {
    return houses.map( h => `Hello guys from ${h.address.street.title}`)
}

