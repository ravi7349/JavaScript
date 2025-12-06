// let prm = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success)
//     {
//         resolve("task completedd succesfully")
//     }
//     else{
//         reject("Tas failed");
//     }
// });

// prm.then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(()=> console.log("Tasslk finised"))
// let prm = new Promise((resolve,reject)=>{
//     let success =true;
//     if(success){
//         resolve("ATs completed succefully")
//     }
//     else{
//         reject("Tas failed");
//     }
// })
// prm.then(result=>console.log(result))
//     .catch(error=>console.log(error))
//     .finally(()=>console.log("task finishedd"))
// function getusers()
// {
//     return new Promise((resolve,reject)=>{
//         fetch("////")
// .then(response=> response.json())
// .catch(error=> console.log(error))
// .finally(()=>console.log("task done"));

//     })
// }
// getusers()
// .then(data=>console.log(data))
// .then(error=> console.log(error));

async function GetData(){
    var response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    var data = await response.json();
    console.log(data);
    
}
var count = 0;
let interval = setInterval(()=>{
    console.log("running",count)
    count++;
    if(count>5){
        clearInterval(interval);
    }
},2000);
