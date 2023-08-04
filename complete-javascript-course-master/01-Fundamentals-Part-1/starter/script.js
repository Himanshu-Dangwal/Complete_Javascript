/*
let js = 'amazing';
console.log(js);
console.log(40 + 10 + 23);

*/

/*
Post And Pre Increment/Decremement Operators

let val = 10+2;
console.log(val);

console.log(++val);
console.log(val++);
console.log(val+2);
*/

/*
Concatenation Operator

let firstName = 'Himanshu';
let lastName = 'Dangwal';
let fullName = firstName + lastName;
console.log(fullName);
console.log(firstName + ' ' + lastName);

*/

// Operator Precedence :

/*
Bracket
Unary ++,--
Arithematic ->  Layer 1 : Exponentiation Right to Left 
               
                Layer 2 : Division       : Left to Right
                          Multiplication : Left to Right

                Layer 3 : Addition : Left to Right 
                          Subtraction : Left to Right

Bitwise
Relational
Logical
Comparision
Assignment     Right to Left

*/

/* BMI assignment

let massMark = 78
let heightMark = 1.69
let massJohn = 92
let heightJohn = 1.95

let BMIMark = massMark/(heightMark*heightMark)
let BMIJohn = massJohn/(heightJohn*heightJohn)

console.log(BMIMark,BMIJohn)
console.log(BMIMark > BMIJohn)

*/

/*
String and Template Literals

let locatn = "Dehradun"
console.log(`Hey this side himanshu from ${locatn}`);

*/

/*

Soltion for 2nd assignment
if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
}else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
}

*/


/*

TypeConversion and Type Coercion

Type Conversion : When we manually convert one type to another:
For eg :

- console.log(Number("10"));
- console.log(String(2023));


- console.log(Number("Himanshu")) -> O/P  NaN

typeof(NaN) -> Number
Reason : Because NaN is an invalid Number

Type Coercion : When javascript implicitly convert one data type to another:
For eg : 
- console.log(10+'1'+'32') -> O/P  10132
- console.log(10+3+4+'9') -> O/P 79
- console.log('1' - 1) -> O/P 0

When we use + operator, JS implicitly converts numbers into string if one or both side of + operator is a string(s).
In case of other operators Strings is converted into Number.

*/

/*
Truthy and Falsy Values

There are only 5 falsy values ::

NaN
undefined
0
""
null

*/

let age = "18";

if(age == 18){
    console.log(`Age is 18`);
}else{
    console.log(`Age is not 18`);
}


if(age === 18){
    console.log(`Age is 18`);
}else{
    console.log(`Age is not 18`);
}

if(age !== 18){
    console.log("hey i am here")
}