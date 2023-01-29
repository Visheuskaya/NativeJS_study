test ('should take old man older then 90', () => {
    const ages = [10,20,22,1,100,90,14];


    const olgAges = ages.filter((age: number) => age > 90);// на месте фильтрации будет новый массив

    expect(olgAges.length).toBe(1);
    expect(olgAges[0]).toBe(100);
})

test ('should take courses chipper 160', () => {
    const courses = [
        {title: 'css', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    const cheapCourses = courses.filter((course: CourseType) => course.price < 160);// на месте фильтрации будет новый массив

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('CSS');
    expect(cheapCourses[1].title).toBe('REACT');
})

test ('get only completed tasks', () =>{
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]
    const completedTasks = tasks.filter( task => task.isDone)

    expect (completedTasks.length).toBe(2);
    expect (completedTasks[0].id).toBe(2);
    expect (completedTasks[1].id).toBe(4);
})