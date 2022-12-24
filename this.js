'use strict'


//youtuber problem of this keyword

// this.table='window table';
// const cleanTable=function(soap){
//     const innerFunction=(_soap)=>{
//         console.log(`cleaning this ${this.table} using ${_soap}`);
//     }
//     innerFunction(soap);
    
// }

// this.garage={
//     table:'garage table',
// }
// let johnRoom={
//     table:'johns table',
// }
// cleanTable.call(this,'my soap')
// cleanTable.call(garage,'garage soap soap')
// cleanTable.call(johnRoom,'room soap')

// let createRoom=function(name){
//     this.table=`${name}s table`;
// }
// createRoom.prototype.cleanTable=function(soap){
//     console.log(`cleaning this ${this.table} using ${soap}`);
// }
// let jiillsRoom=new createRoom('Jill');
// let johnRoom=new createRoom('john');
// jiillsRoom.cleanTable('my soap');
// johnRoom.cleanTable('our soap');


//Design Pattern Problem

// class Student{
//     static count=0;
//     constructor(name,age,phoneNo,marks){
//         this.name=name;
//         this.age=age;
//         this.phoneNo=phoneNo;
//         this.marks=marks;
//         Student.count++;
//     }
//     static countOfStudent(){
//         console.log(`No of students is: ${Student.count}`);
//     }
//     eligibility(){
//         if(this.marks>=40){
//             console.log('Elgibile for the  college');
//         }
//         else{
//             console.log('Not Elgibile for the  college');
//         }
//     }
// }
// let s1=new Student('s1',18,123,76);
// let s2=new Student('s2',19,456,34);
// let s3=new Student('s3',20,789,45);
// let s4=new Student('s4',21,135,40);
// let s5=new Student('s5',22,701,28);
// Student.countOfStudent();


//youtuber problem of fat arrow function

// let getA= a=> a;
// let square=(a)=>{
//     return a*a;
// };
// let mult=(a,b)=>{
//     return a*b;
// }
// console.log(mult(2,4));

// var x=function(){
//     this.val=1;
//     setTimeout(()=>{
//         this.val++;
//         console.log(this.val);
//     },1000)
// }
// var xx=new x();

// var x=(...n)=>{
//     console.log(n[1]);
// }
// x(1,2,3);

//Design Pattern Problem
class Student{
        static count=0;
        constructor(name,age,phoneNo,marks){
            this.name=name;
            this.age=age;
            this.phoneNo=phoneNo;
            this.marks=marks;
            Student.count++;
        }
        static countOfStudent(){
            console.log(`No of students is: ${Student.count}`);
        }
        eligibleForPlacements(minMarks){
                return (ageE)=>{
                    if(this.marks>=minMarks && this.age>=ageE){
                        return true;
                    }
                    return false;
                }
        }
        eligibility(){
            if(this.marks>=40){
                console.log('Elgibile for the  college');
            }
            else{
                console.log('Not Elgibile for the  college');
            }
        }
    }
var s1=new Student('s1',21,123,51);
let s2=new Student('s2',19,456,34);
let s3=new Student('s3',20,789,56);
let s4=new Student('s4',21,135,40);
let s5=new Student('s5',22,701,89);
let arr=[s1,s2,s3,s4,s5];
console.log(`The student list of those student who are eligible in placements are:`);
for(var i=0;i<arr.length;i++){
    if(arr[i].eligibleForPlacements(48)(19)){
        console.log(arr[i].name);
    }
}
