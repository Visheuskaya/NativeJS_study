export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}
type TechnologiesType = {
    id: number
    title: string
}
type AddressType = {
    streetTitle: string
    city: LokalCityType
}
type LokalCityType = {
    title: string
    countryTitle: string
}

const student: StudentType = {
    name: 'Valeryia',
    age: 22,
    isActive: true,
    address: {
        streetTitle: 'Slawianskaya 16',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {id: 1,title: 'HTML'},
        {id: 2,title: 'CSS'},
        {id: 3,title: 'React'}
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[1].title)
