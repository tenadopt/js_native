export type StreetType = {
    title: string
}

export type AdressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    bueldedAt: number
    repaired: boolean
    adress: AdressType
}

export type GovermentBuildingsType = {
    type: "HOSPITAL" | "FIRE STATION"
    budget: number
    staffCount: number
    adress: AdressType
}


export  type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<GovermentBuildingsType>
    citizenNumber: number
}
