// create by Andres Suhendrawan and mentored by youtube video Brad Traversary Media. Thankyou Brad ! :D 
const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})
// toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})
// toBeNull
test('isNull expected to be Null', () => {
    expect(functions.isNull()).toBeNull()
})
// toBeFalsy
test('checkValue should be Falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})

// if you want to test an object or Array use toEqual don't use toBe !

// toEqual
test('User should be Andres object', () => {
    expect(functions.createUser()).toEqual({firstName:'Andres', lastName:'Suhendrawan'})
})
// Less than and greater than

// les than wold'nt work if the sum value is 1600, it worked just less then 1600
test('should be under 1600', ()=>{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
}) 
// use toBeLessThanOrEqual getting succes for sum value less or equal 1600
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
}) 

// regex
test('There is no I in team', ()=>{
    expect('team').not.toMatch(/i/);
})

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})

// working with async data

// promise
// test('User Fetched name should be Leanne Graham', ()=> {
//     expect.assertions(1);
//      return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     });
// })


// async await
test('User Fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
        expect(data.name).toEqual('Leanne Graham')
})

// In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently.Jest contains helpers that let you be explicit about what you want.

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false