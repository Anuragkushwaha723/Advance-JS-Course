// const post=[
//     {title:'Post One',body:'This is my post one',createdAt:new Date().getTime()},
//     {title:'Post Two',body:'This is my post two',createdAt:new Date().getTime()},
// ]
// let intervalId=0;
// function getPost(){
//     clearInterval(intervalId);
//     intervalId= setInterval(()=>{
//         let output=``;
//         post.forEach((post)=>{
//             output=output+`<li>${post.title}  -  last updated ${Math.floor((new Date().getTime() - post.createdAt)/1000)} seconds ago</li>`;
//         });
//         console.log(intervalId);
//         document.body.innerHTML=output;
//     },1000);
// }
// function createPost(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const error=false;
//             if(!error){
//                 post.push({...data,createdAt:new Date().getTime()});
//                 resolve();
//             }
//             else{
//                 reject('Error : Something went wrong');
//             }
//         },1000);
//     })
// }
// createPost({title:'Post Three',body:'This is my post three'}).then(getPost).catch(err=>console.log(err));
// function deletePost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(post.length>0){
//                 post.pop();
//                 resolve();
//             }else{
//                 reject('Array is empty');
//             }
//         },1000);
//     })
// }
// deletePost().then(getPost).catch(err=>console.log(err));
// deletePost().then(getPost).catch(err=>console.log(err));
// deletePost().then(getPost).catch(err=>console.log(err));
// createPost({title:'Post Four',body:'This is my post four'})
// .then(setTimeout(deletePost,1000)).catch(err=>console.log(err));
// console.log(post);

//Promise.all
// const Promise1=Promise.resolve(13);
// const Promise2=20;
// const Promise3= new Promise((resolve, reject) => {
//     setTimeout(resolve('bholenath ji'), 1000);
// })
// Promise.all([Promise1,Promise2,Promise3]).then(([ans1,ans2,ans3])=>console.log(ans1,ans2,ans3))
// .catch(err=>console.log('This is the error'));


const user=[];
var lastUserActivityTime=new Date();
const updateLastUserActivityTime=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastUserActivityTime=new Date();
            resolve(lastUserActivityTime);
        }, 1000);
    });
}
const createPost= (data)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            user.push(data);
            resolve(user);
        },1000);
    })   
};
const deletePost= (data)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let delP=user.pop();
            console.log(delP);
            resolve(user);
        },1000);
    })   
}; 

//user1
Promise.all([createPost({user1:'Post1 is created'}),updateLastUserActivityTime()])
.then(([arr,time])=>{
    arr.forEach((val)=>{console.log(val)});
    console.log(`After Post1 time =  ${time}`);
})
.catch(err=>console.log(err));


//user2
Promise.all([createPost({user2:'Post2 is created'}),updateLastUserActivityTime()])
.then(([arr,time])=>{
    arr.forEach((val)=>{console.log(val)});
    console.log(`After Post2 time =  ${time}`);
})
.catch(err=>console.log(err));

console.log(`Before Post time =  ${lastUserActivityTime}`);
deletePost().then(val=>console.log(val));
