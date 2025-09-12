//Node.js 
// console.log("Hello");
//IMPORTANT : CALLBACKS IS A FUNCTION.
const fs = require('node:fs');

// fs.writeFile("file.txt", "Hello How you doing?", function(err){
//     if (err) {
//         console.error(err);
//     }
//     else {
//         console.log("Hurrah! No error")
//     }
// });

// fs.appendFile("file.txt", " I am fine now", function(err){
//     if (err) {
//         console.error(err);
//     }
//     else {
//         console.log("Hurrah! No error")
//     }
// });

// fs.rename("file1.txt", "file.txt", function(err) {
//     if(err) {
//         console.error(err);
//     }
//     else {
//         console.log("renamed");
//     }
// })

// fs.copyFile("file.txt", "./copy2/copy.txt", function(err) {
//     if(err){
//         console.error(err);
//     }
//     else {
//         console.log("Copied Successfully!");
//     }
// });

// fs.unlink("./copy/copy.txt", function(err) {
//     if(err){
//         console.error(err);
//     }
//     else {
//         console.log("Removed");
//     }
// });

fs.rmdir("copy", function(err) {
    if(err){
        console.error(err);
    }
    else {
        console.log("Directory removed");
    }
});