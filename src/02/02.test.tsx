import {CityType} from "./02_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                bueldedAt: 2012, repaired: false,
                adress: {number: 100, street: { title: "While Street" }}
            },
            {
                bueldedAt: 2008, repaired: false,
                adress: { number: 100, street: { title: "Happy Street" }}
            },
            {
                bueldedAt: 2020, repaired: false,
                adress: { number: 101, street: { title: "Happy Street" }}
            }],
        govermentBuildings: [],
        citizenNumber: 1000000
    }
})

//01. создайте CityType
//02. заполниите объект city, чтобы тесты ниже прошли
test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].bueldedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].adress.number).toBe(100);
    expect(city.houses[0].adress.street.title).toBe("While Street");

    expect(city.houses[1].bueldedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].adress.number).toBe(100);
    expect(city.houses[1].adress.street.title).toBe("Happy Street");

    expect(city.houses[2].bueldedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].adress.number).toBe(101 );
    expect(city.houses[2].adress.street.title).toBe("Happy Street");
})

//01. дополните тип GovermentBuildingsType
//02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains hospital and fire station", () => {
    expect(city.govermentBuildings.length).toBe(2);

    expect(city.govermentBuildings[0].type).toBe("HOSPITAL");
    expect(city.govermentBuildings[0].budget).toBe(200000);
    expect(city.govermentBuildings[0].staffCount).toBe(200);
    expect(city.govermentBuildings[0].adress.street.title).toBe("Centarl Str");

    expect(city.govermentBuildings[1].type).toBe("FIRE STATION");
    expect(city.govermentBuildings[1].budget).toBe(500000);
    expect(city.govermentBuildings[0].staffCount).toBe(1000);
    expect(city.govermentBuildings[0].adress.street.title).toBe("South Str");
})