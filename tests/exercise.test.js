const exercise = require('../exercise');

describe('FizzBuzz', ()=>{

it('show throw an exception if input is not a number', ()=>{
	expect(()=>{exercise.FizzBuzz('a')}).toThrow();
	expect(()=>{exercise.FizzBuzz(null)}).toThrow();
	expect(()=>{exercise.FizzBuzz(undefined)}).toThrow();
	expect(()=>{exercise.FizzBuzz({})}).toThrow();
})

it('should return FizzBuzz if input is divisible by 3 and 5', ()=>{
	const result = exercise.FizzBuzz(15);
	expect(result).toBe('FizzBuzz');
})
 
it('should return Fizz if input is only divisible by 3', ()=>{
	const result = exercise.FizzBuzz(3);
	expect(result).toBe('Fizz');
}) 


it('should return Buzz if input is only divisible by 5', ()=>{
	const result = exercise.FizzBuzz(5);
	expect(result).toBe('Buzz');
}) 

it('should return input if its divisible by 3 and 5', ()=>{

	const result = exercise.FizzBuzz(1);
	expect(result).toBe(1);
})
})