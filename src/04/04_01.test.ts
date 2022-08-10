test("should take old men older then 90s", () => {

    const ages = [18, 20, 22, 1, 100, 90, 14];

    const predicate = (age: number) => {
        return age > 90;
    }

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take cheap courses", () => {

    type CourseType = {
        title: string
        price: number
    }

    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ];

    const cheapPredicate = (course: CourseType) => {
        return course.price < 160;
    }

    const cheapCourses = courses.filter(cheapPredicate)

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[1].title).toBe("REACT")
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true}
    ]

    const sumFunction = (value: any) => {
        return value.isDone
    }

    const completedTasks = tasks.filter(sumFunction)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true}
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})