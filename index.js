let a = 10;
let b= 0;

// setTimeout(()=>{
//     b=20
// },2000);

// console.log(a+b); // output 10 not 30 ddwaback asynchronous lang bez excute and forward not wait for this handle by promises and await function
let waitingdata = new Promise((resolve,reject)=>{
    setTimeout(()=>{
           resolve(30)
        },2000);
})

waitingdata.then((data)=>{
    b= data;
    console.log(a+b)
})