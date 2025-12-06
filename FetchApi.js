// fetch("https://catfact.ninja/fact")
// .then((res)=> res.text())
// .then(txt => {
//     console.log(txt)
//     console.log(JSON.parse(txt))})
// .catch(()=> console.log("api failed"));

async function getcatFact()
{
    const data = await fetch("https://catfact.ninja/fact");
   // console.log(data);
    const txt = await data.json()
    console.log(txt);
}
getcatFact();

async function getfact(){
    var response = await fetch("http");
    var data = await response.json();
    console.log(data);
}

async function getcatfact()
{
    const data = await fetch("https://catfact.ninja/fact");
   const txt =  await data.json()
}

async function getfact() {

    const data = await fetch()
    const txt = await data.json()
    console.log(txt);
    
}

fetch("https://catfact.ninja/fact")
.then((res)=>console.log(res))
.then(txt=>{
    console.log(txt)
    console.log(JSON.parse(txt))})
.catch(()=> console.log("api failed"))