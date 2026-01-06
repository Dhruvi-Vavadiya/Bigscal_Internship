// console.log("one");
// console.log("two");
// console.log("three");

//callback
function add(a, b) {
    console.log(a + b);
}

function calculate(a, b, addcall) {
    addcall(a, b);
}

// calculate(5,6,add);
calculate(5, 7, (a, b) => {
    console.log(a + b);
});

//callback setTimeout

let hello = () => {
    console.log("hello world");
};

// setTimeout(hello, 1000); 

//callack hell
function getDa(datais, getNextData) {
    setTimeout(() => {
        console.log("data is :- " + datais);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// getDa("hello", () => {
//     getDa(47);
// });

//promise
// let promise = new Promise((resolve,reject)=>{....})
let pro = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!!!!!"), 1000);
});
// pro.then(
//     re => alert(re),
//     err => alert(err)
// );
let promise = new Promise((resolve, reject) => {
    // console.log("promise is pending");
    // resolve(2154);
    // reject(new Error("error occured"));
})

//callack hell
function getPromise(datais, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("data is :- " + datais);
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    })
}

// getPromise("hello", () => {
//     getPromise(47);
// });

const conPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("promise is pending");
        // resolve("sucess");
        reject("errorrr occurred");
    });
}
//.then .catch

// let pros = conPromise();
// pros.then(()=>{
//     console.log("promise fullfilled");
// });
// pros.catch((err)=>{
//     console.log("promise rejected" + err);
// })

function add(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("settimeout function :- " + a);
            resolve(a);
        }, 2000);
    })
}
//callback chaining
// add(5)
//     .then((data) => {
//       return add("hello");
//     })
//     .then((data)=>{
//         return add(47);
//     })
//     .then((data)=>{
//         alert("all done :" + data);
//     });

//async await
// (async function asyncawait(){
//     let val1 = await add(58888);
//     let val2 = await add("hello58888");
//     let val3 = await add(4787888);
//     alert("all done :" + val3);
// })();


//(function)();
// asyncawait(); 


//api

let url = "https://jsonplaceholder.typicode.com/users";

const datadogs = "https://dogapi.dog/api/v2/breeds";

const facth4 = document.querySelector("#fact");
const factbtn = document.querySelector("#btn");
const factbtnjson = document.querySelector("#btnjson");



const getdata = async () => {
    let promises = await fetch(url);
    console.log(promises); // response object
    let data = await promises.json();
    console.log(data); // array of object
    facth4.innerHTML  = data[3].email;
};
factbtn.addEventListener("click",getdata);
// getdata();

let outid = document.querySelector("#output");

const jsondata = async () =>{
    let data = await fetch("./app.json");
    alert(data); // response object
    let res = await data.json(); //  array of object
    console.log(res);
    facth4.innerHTML  = JSON.stringify(res); //converting object to string
    // for(let d in res){
    //     let p  = document.createElement("p");
    //     p.textContent = `${d} :: ${res[d]}`;
    //     outid.appendChild(p);
    // }
    
}
factbtnjson.addEventListener("click",jsondata);