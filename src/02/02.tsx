type CityType = {
    title: string
    countryTitle: string
}

type AdressType = {
    streetTitle: string
    city: CityType
}

type TechnologiesType = [

]

type TechType = {
    id: number
    title: string
}

type StudentType = {
    name: string
    age: number
    "hair cut": string
    isActive: boolean
    address: AdressType
    technologies: Array<TechType>
}

const student: StudentType = {
    name: "Yury",
    age: 36,
    "hair cut": "cut",
    isActive: false,
    address: {
        streetTitle: "Pushkinskaya",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        },
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 1,
            title: "React"
        }
    ]
}

console.log(student.age)
console.log(student["hair cut"])
console.log(student.address.city.title)

const school = {
    name: "IT-incubator"
}