const ages = [18,20,22,1,100,90,14];

const predicate = (age: number) => {
    return age > 91;
}

const oldAges = [100]; // > 90

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]

const cheapPredicate = () => {
    return course.price < 160;
}

const cheapCourses = [
    {title: "CSS", price: 110},
    {title: "REACT", price: 150}
]