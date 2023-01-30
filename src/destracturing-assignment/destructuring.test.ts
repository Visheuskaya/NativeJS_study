type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Valeryia',
        age: 22,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})

test('', () => {
// деструктурирующее присвание разбор на части
    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(3);
    expect(lessons.length).toBe(2);

    expect(title).toBe('Nezavisimosti street')

})
// деструктуризация с массивом
test('test', () => {
    // const l1 = props.lessons[1];
    // const l2 = props.lessons[2];
    const [l1, l2] = props.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
})