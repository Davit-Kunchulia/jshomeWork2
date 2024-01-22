
// 1
for (let i = 5; i <= 100; i = i + 1) {
    console.log(i);
}


// 2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];{

for(nat = 0; nat < array1.length; nat++){
    if(array1[nat] > 0 && array1[nat] < 10){
        console.log(array1[nat]);
    }
}
}


// 4
let array3 = [1, 2, 3, 4, 5];

let sum = 0

for (let mimateba = 0; mimateba < array3.length; mimateba++) {
    sum = sum + array3[mimateba]
}
console.log(sum);


// 5
let array4 = [1, 2, 3, 7, 6, 9];

let sum2 = 0;

for (let average = 0; average < array4.length; average++) {
    sum2 = sum2 + array4[average]
}

console.log(sum2 / array4.length);


// 7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};

console.log(user.studentstatus);


// 8
let user2 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}

if (user2.age < 18 && user2.studentstatus == "active") {
    console.log("hello");
}
else {
    console.log("error");
}

if (user2.name == "levani") {
    console.log("hello levani");
}
else {
    console.log("error");
}

if (user2.studentstatus == "active" || user2.age < 25) {
    console.log("hello world");
}
else {
    console.log("error");
}



// 10
let numbers = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for(luwi = 0; luwi < numbers.length; luwi = luwi + 1){
    if(numbers[luwi] % 2 == 0){
        console.log(numbers[luwi]);
    }
 }
 for(kenti = 0; kenti < numbers.length; kenti = kenti + 1){
    if(numbers[kenti] % 2 == 1){
        console.log(numbers[kenti]);
       }
    }



// 11
let users = [
    { username: 'giorgi', status: false },
    { username: 'levani', status: false },
    { username: 'anna', status: true }
]


if (users[0].status == true) {
    console.log(users[0]);
}
if (users[1].status == true) {
    console.log(users[1]);
}
if (users[2].status == true) {
    console.log(users[2]);
}
























