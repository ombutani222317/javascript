// Number Object 
// number is a data type 
// 1.integer    
// 2.float Value


// Number.isFinite() 
// The Number.isFinite() static method determines whether the passed value is a finite number

{
    let number = new Number();
    console.log(Number.isFinite(number));
    console.log(Number.isFinite(10));
    console.log(Number.isFinite(0 / 1));
    console.log(Number.isFinite(1 / 0));
    console.log(Number.isFinite("1"/1));
    console.log(Number.isFinite("1"/"1"));
}


// Number.isInteger()
// The Number.isInteger() static method determines whether the passed value is an integer.
// it can be used for given data answer is integer number ya not
{
    let number= new Number();
    console.log(Number.isInteger(10/5));
    console.log(Number.isInteger(10/4));
    console.log(Number.isInteger("10"/"10"))
}


// Number.isNaN()
// The Number.isNaN() static method determines whether the passed value is the number value NaN,

{
    let number= new Number();
    console.log(Number.isNaN(10/5));
    console.log(Number.isNaN(0/0));
    console.log(Number.isNaN(0/1));
}


// Number.parseFloat()
// The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

{
    
}