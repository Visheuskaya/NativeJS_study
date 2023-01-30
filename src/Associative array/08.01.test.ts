import {usersObj} from "./08.01";

test('should select corresponding user from obj', () =>{
    expect(usersObj[0]).toBe('Dimych');
    expect(usersObj[1]).toBe('Valeryia');
    expect(usersObj[2]).toBe('Valera');
    expect(usersObj[3]).toBe('Tsihon');
})