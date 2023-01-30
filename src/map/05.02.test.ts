import {CityType} from "../02/02";
import {getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses, grettingMessages} from "./05.02";

let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildedAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
            {
                buildedAt: 2008, repaired: false, address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                buildedAt: 2020, repaired: false, address: {
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

test ('list of streets titles og dovernments buildings', () => {
    let streetsName = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings);

    expect(streetsName.length).toBe(3);
    expect(streetsName[0]).toBe('Central Str');
    expect(streetsName[1]).toBe('South Str');
})

test ('list of streets titles', () => {
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe('White street');
    expect(streets[1]).toBe('Happy street');
    expect(streets[2]).toBe('Happy street');

})

test('create greting messages for streets ',()=>{
let messages =  grettingMessages(city.houses);

expect(messages.length).toBe(3);
expect(messages[0]).toBe('Hello guys from White street');
expect(messages[1]).toBe('Hello guys from Happy street');
expect(messages[2]).toBe('Hello guys from Happy street');

})

