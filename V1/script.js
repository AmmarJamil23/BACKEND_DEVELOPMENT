// alert("PORT")

var array = [1, 2, 3, 5];
// array.forEach(function(val) {
//     console.log(val + "  hello");
// });


// array.map(function(val) {
//     console.log(val + 12);
// });


// let ans = array.filter(function(val) {
//     if(val >= 3) {return true;}
//     else return false;
// });

// console.log(ans)

// let answer = array.find(function(val) {
//     if(val === 5) return val;
// });

// console.log(answer);

/*
Objects are key value pair
*/

// let obj = {"name": "Ammar", age: 22, "isMarried": false};
// console.log(obj);

// let obj2 = {"hello": "Ammar", "HelloAgain": "Ammar2"};
// console.log(obj2.HelloAgain);


// function func() {
//     return 12;
// }

// console.log(func());

// await fetch('https://randomuser.me/api/');

async function abcd() {
    var blob = await getch(`https://randomuser.me/api/`);
    var ans = blob.json();

    console.log(ans);
}

abcd();

