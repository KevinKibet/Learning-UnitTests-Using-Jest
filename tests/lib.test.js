
const lib = require('../lib.js');

//Testing Nummbers
describe('absolute', ()=>{

it('should return a positive number if the input is positive', ()=>{
   const result = lib.absolute(1);
   expect(result).toBe(1);
})



it('should return a negative  number if the input is negative', ()=>{
   const result = lib.absolute(-1);
   expect(result).toBe(1);
})


it('should return a 0 if the input is zero', ()=>{
   const result = lib.absolute(0);
   expect(result).toBe(0 );
})


})


//Testing strings

describe('strings', ()=>{

	it('should return a string if the input is string', ()=>{
   const result = lib.strings('kevinkibet');
   expect(result).toBe('welcome kevinkibet');
   expect(result).toMatch(/kevinkibet/);
   expect(result).toContain('kibet');
})
})