export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexandr Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

const dimuchTransformator = (man: ManType) => ({
    stack:['css,html','js','tdd','react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})

const dev1 = [
    {
        stack:['css,html','js','tdd','react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack:['css,html','js','tdd','react'],
        firstName: 'Alexandr', lastName: 'Petrov'
    },
    {
        stack:['css,html','js','tdd','react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    }
]

const dev2 = [
    dimuchTransformator(people[0]),
    dimuchTransformator(people[1]),
    dimuchTransformator(people[2]),
]

const dev3 = people.map(dimuchTransformator)
const dev4 = people.map(man => ({
    stack:['css,html','js','tdd','react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

const messages = people.map(man => `hello ${man.name.split( ' ')[0]}. Welkome to IT-INCUBATOR`);

export const createGreetingMessage = (people: Array<ManType>) =>{
    return people.map( man => `Hello ${man.name.split( ' ')[0]}. Welkome to IT-INCUBATOR`)
}