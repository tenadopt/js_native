test("should take old men older then 90s", () => {

    const ages = [18,20,22,1,100,90,14];

    const predicate = (age: number) => {
        return age > 91;
    }

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

    test("should take cheap courses", () => {

        const ages = [18,20,22,1,100,90,14];

        const predicate = (age: number) => {
            return age > 91;
        }

            const oldAges = ages.filter(predicate)

            expect(oldAges.length).toBe(1);
            expect(oldAges[0]).toBe(100);
        })