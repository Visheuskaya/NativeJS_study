export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}
export type GovernmentBuildingsType = {
    type : 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: GovernmentStreetType
}
type GovernmentStreetType = {
    street: GovernmentTitleType
}
type GovernmentTitleType = {
    title: string
}
export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddresssType
}
export type AddresssType = {
    number: number
    street: StreetType
}
export type StreetType = {
    title: string
}