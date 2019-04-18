
const lib = require('../lib.js');

test('it should return a positive number if the input is positive', ()=>{
   const result = lib.absolute(1);
   expect(result).toBe(1);
})



test('it should return a negative  number if the input is negative', ()=>{
   const result = lib.absolute(-1);
   expect(result).toBe(1);
})


test('it should return a 0 if the input is zero', ()=>{
   const result = lib.absolute(0);
   expect(result).toBe(0);
})