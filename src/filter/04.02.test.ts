import {CityType} from "../02/02";
import {demolishOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04.02";

let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            id: 1, buildedAt: 2012, repaired: false, address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
            {
                id: 2, buildedAt: 2008, repaired: false, address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3, buildedAt: 2020, repaired: false, address: {
                    number: 10,
                    street: {
                        title: 'Happy street'
                    }
                }
            }],
        governmentBuildings: [
            {type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {street: {title: 'Central Str'}}},
            {type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {street: {title: 'South Str'}}},],
        citizensNumber: 1000000
    }
})
test('houses should be destroyed', () => {
    demolishOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

// test ('list of street titles of goverments buildings', ()=>{
//     let streets = getStreetsTitlesOfGovernmentsBuildings(
//         city.governmentBuildings);
//
//     expect(streets.length).toBe(2)
//     expect(streets[0]).toBe('Central Str')
//     expect (streets[0]).toBe('South Str')
// })

// test('list of streets titles of houses', () => {
//     let happyHouses = getHousesOnTheStreet(city.houses, 'Happy street');
//     let whiteHouses = getHousesOnTheStreet(city.houses, 'White street');
//
//     expect(happyHouses.length).toBe(2);
//     expect(whiteHouses.length).toBe(1)
// })

test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings.length).toBe('FIRE-STATION')
})








