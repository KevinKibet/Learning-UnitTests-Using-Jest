
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



//Testing arrays

describe('getCurrency', ()=>{

it('should return supported currencies', ()=>{

	const result = lib.getCurrency();
 //Too general tests
 expect(result).toBeDefined();
 expect(result).not.toBeNull();

 //Too specific tests
 expect(result[0]).toBe('KSH');
 expect(result[1]).toBe('USH');
 expect(result[2]).toBe('TSH');
 expect(result.length).toBe(3);

 //Proper way tests
 expect(result).toContain('KSH');
 expect(result).toContain('TSH');
 expect(result).toContain('USH');

 //Ideal way
 expect(result).toEqual(expect.arrayContaining(['USH', 'KSH', 'TSH']));

})

 
})




//Testing Objects
describe('getProduct', ()=>{
it('should retunthe product given Id',()=>{
   const result = lib.getProduct(1);

   //strict equality
   expect(result).toEqual({id: 1,price: 10});

   //Less strict
   expect(result).toMatchObject({id: 1, price: 10});
   expect(result).toHaveProperty('id', 1);


})

})


//Testing exceptions

describe('register', ()=>{
   
   it('should throw error if username is falsy', ()=>{

   	const args = [null, undefined, NaN, '', 0, false] ;
   	args.forEach(a=>{
   		expect(()=>{
   		lib.registerUser(a)	
   		}).toThrow();
   	})


   })

   it('should return a user object if username is passed', ()=>{

   	 const result = lib.registerUser('kevinkibet');

   	 expect(result).toMatchObject({username: "kevinkibet"});
   	 expect(result.id).toBeGreaterThan(0);
   })
})