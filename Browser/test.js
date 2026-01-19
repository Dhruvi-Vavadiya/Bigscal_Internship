//callback
let user = { profile: null };
console.log(user.profile?.name ?? "Guest");

function getData(callback){ //2
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res=>res.json())
    .then(data=>callback(data));
}

function prossedata(data){ //3
    console.log("prossedata:- " + data);
    for(let i of Object.keys(data)){
        console.log(i);
    }
}
// debugger;
// getData(prossedata); //1

///////////////////////
function sum(a,b){
    console.log("sum function :=" ,a+b);
}

function calculater (a,b,sumcallback){
    sumcallback(a,b);
}
calculater(5,2,sum);


//promise

function getPromise(){
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}

getPromise()
.then(data=> console.log(data))
.catch(err => console.log(err));



// Reverse words in a sentence without reversing characters inside words.

let sen = "this is javascript";

let word = sen.split(" ");

word.reverse();

let rev = word.join(" ");
// console.log(rev);

// Find the first non-repeating character in a string.

let nonrepet = "leetcode";
//    console.log("io:-" +nonrepet.indexOf('e'));
//     console.log("lio :- " +nonrepet.lastIndexOf('d'));

    
// debugger;
for(let i=0;i<nonrepet.length;i++){
    
    let char = nonrepet[i];
 
    if(nonrepet.indexOf(char) == nonrepet.lastIndexOf(char)){
        // console.log(char);
    }
}

// Check if two strings are anagrams without using built-in sort.

// Compress a string (aaabbc → a3b2c1).


// Capitalize the first letter of each word efficiently.


const originalString = "capitalize the first letter of each word efficiently";

let splitos = originalString.split(" ");
let finalstr = "";

for(let i =0 ;i< splitos.length-1;i++){
    let str = sendword(splitos[i]);

    finalstr += str;
}


// console.log("final string reverse : -" +finalstr);

function sendword(strword){
    const firstLetterCapital = strword.charAt(0).toUpperCase();
    const restOfString = strword.slice(1);

    let word = firstLetterCapital + restOfString + " ";
   
    return word;
}

// Find the second largest number in an array in one loop.

let arr = [5,1,7,6,1,41,57,95];
let newarr = [];

let n = arr.length;
    
// Sort the array in non-decreasing order
arr.sort((a, b) => a - b);

// start from second last element as last element is the largest
for (let i = n - 2; i >= 0; i--) {
  
    // return the first element which is not equal to the 
    // largest element
    if (arr[i] !== arr[n - 1]) {
        newarr += arr[i];
    }
}

for(let  i= 0 ; i< newarr.length ;i++){
    console.log(newarr[i]);
}


// Remove duplicates from an array without using Set.

// Rotate an array k times to the right.

// Merge two sorted arrays into one sorted array.

// Find missing numbers in a sequence array.

