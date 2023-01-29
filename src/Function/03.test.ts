import {StudentType} from "../02/object";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
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
            {id: 1, title: 'HTML'},
            {id: 2, title: 'CSS'},
            {id: 3, title: 'React'}
        ]
    }
})
test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');// функция модифицирует данные

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false);
    // функция модифицирует данные
    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})
test('Does student live in city?', () => {
   let result1 = doesStudentLiveIn(student,'Moscow');
   let result2 = doesStudentLiveIn(student,'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})