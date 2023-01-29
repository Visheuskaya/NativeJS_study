// функция нужна для того,чтобы делать одни и те же действия с разными значениями
import {StudentType} from "../02/object";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02";

const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
    return s.address.city.title === cityName
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
    building.budget += budget;
}

// export const demolishHousesOnTheStreet = (city: CityType, happyStreet: string) => {
//
// }
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingsType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount += staffCountToFire;
}