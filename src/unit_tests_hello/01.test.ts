import {mult, splitIntoSentense, sum} from "./01";

test('sum should be correct', () => {
})
//data
const a = 1;
const b = 2;
const c = 3;
//action
const result = sum(a,b);
//result
expect(result).toBe(3)
test('multiply should be correct', () => {
})
const d = 1;
const e = 2;
const j = 3;
const results = mult(d, e);

expect(results).toBe(2)


test('splitting into words should be correct', () => {
})
const sent1 = 'Hello my friend!';
const sent2 = 'JS - the best programming language!';

const result3 = splitIntoSentense(sent1);
const result4 = splitIntoSentense(sent2);

expect(result3.length).toBe(3);
expect(result3[0]).toBe('hello');
expect(result3[1]).toBe('my');
expect(result3[2]).toBe('friend');

expect(result4.length).toBe(5);
expect(result4[0].length).toBe('js');
expect(result4[1].length).toBe('the');
expect(result4[2].length).toBe('best');
expect(result4[3].length).toBe('programming');
expect(result4[4].length).toBe('language');
