var obj={num:5};
var addThis=function(a,b,c){
    return this.num + a + b + c;
}
console.log(addThis.call(obj,1,2,3));
var arr=[1,2,3];
console.log(addThis.apply(obj,arr));
var nameFunct=addThis.bind(obj);
console.log(nameFunct(1,2,3));


const Student={
    age:20,
}
function print(){
    console.log(this.age);
}
var ageF=print.bind(Student);
ageF();

//Function currying  by bind method
let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5);

//function currying by closure

let mul=function(x){
    return function(y){
        console.log(x*y);
    }
}
let mulByTwo=mul(2);
mulByTwo(5);

let mulByThree=mul(3);
mulByThree(5);