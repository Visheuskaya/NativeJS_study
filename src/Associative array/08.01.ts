export const usersArray = ['Dimych','Valeryia','Valera','Tsihon'];

export const usersObj = {
    '0':'Dimych',
    '1':'Valeryia',
    '2':'Valera',
    '3':'Tsihon'
}
type usersType = {
    [key: string] : {id: number, name: string}
}
export const users: usersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Valeryia'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}
let user = {id: 520,name: 'Igor'}
users[user.id] = user;
//users[1]

const ArrayUsers = [{
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Valeryia'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}]

//ArrayUsers.find(u => u.id === 1)

