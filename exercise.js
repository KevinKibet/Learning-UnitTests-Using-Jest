  module.exports.FizzBuzz = function(Input){

   if(typeof Input !=='number'){

         throw new Error('Only number is required');
}
   if ((Input%3===0) && (Input%5===0)) {  return 'FizzBuzz'; }
     
   if(Input%3===0){ return 'Fizz' ; }

   if(Input%5===0){ return 'Buzz' ;}

   return Input ;
}



