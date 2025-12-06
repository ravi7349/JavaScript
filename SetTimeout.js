//setTimeOut
console.log("code started");
setTimeout(()=>{
    console.log("code is ececuting")
},2000);
console.log("code executed");

//SetInterval
let count = 1;
let interval  = setInterval(()=>{
    console.log("data printed",count);
    count++;
if(count>5){
    clearInterval(interval);
}
},2000);