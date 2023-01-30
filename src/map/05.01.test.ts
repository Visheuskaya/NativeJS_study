import {createGreetingMessage, ManType} from "./05.01";

let people: Array<ManType> = []
beforeEach(() => {
    people = [
            {name: 'Andrew Ivanov', age: 33},
            {name: 'Alexandr Petrov', age: 24},
            {name: 'Dmitry Sidorov', age: 18}
        ]
})
test ('should ger array of greeting messages', () => {

    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrew. Welkom to IT_INCUBATOR')
    expect(messages[1]).toBe('Hello Aleksandr. Welkom to IT_INCUBATOR')
    expect(messages[2]).toBe('Hello Dmitry. Welkom to IT_INCUBATOR')
})