
// 1
for (let i = 5; i <= 100; i = i + 1) {
    console.log(i);
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
























