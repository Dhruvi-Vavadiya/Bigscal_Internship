function sumAll(fnm,lnm,...argsa){
    let sum=0;
    for(let i of argsa){
        sum += i;
    }
    alert(fnm + " " + lnm + " " + sum + " length is " + argsa.length);
    // return sum;
}

// console.log(sumAll("dhruv","vavadiya",1,2,3,4,5,6,7,8,9));
// console.log(sumAll("vasoya","nency",1,2,3));

for(var i=0;i<10;i++){
    var one = i;
}

alert(i);
alert(one);

//for in loop
let read = async () =>{
    let fileread = await fetch('./app.json');
let data = await fileread.json();
for(let i in data){
    let p  = document.createElement("p");
    p.textContent = `${i} :: ${data[i]}`;
    document.body.appendChild(p);
    
    alert(i + " : " + data[i]);
}
 }
 read();
//for of loop

let arrstr = ["shubham","dhruv","nency","vasoya"];
for(let i of arrstr){
    console.log(i);
}
let timerId = setInterval(() =>
    //  alert('tick')
    alert(new Date()) 
, 2000);

setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);