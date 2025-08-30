

/*
  --- How `require()` works in Node.js ---
  1. It first checks built-in Node modules (e.g., fs, path, http).
  2. If not found, it checks the local files (like ./math.js).
  3. If still not found, it looks into the node_modules folder for installed packages.
*/

// Example: requiring a built-in module
const fs = require('fs');

// Example: requiring our own local file (math.js in same directory)
const math = require('./math.js').default;

/*
  Now we can use the exported functions from math.js
  just like methods of an object.
*/
console.log("Addition:", math.add(2, 3));      // 5
console.log("Subtraction:", math.sub(4, 3));   // 1

/*
  Special globals in Node.js:
  __filename = absolute path of the current file
  __dirname  = absolute path of the current directory
*/
console.log({ __filename, __dirname });

/*
  If we require something not built-in and not in our project files,
  Node will check npm packages.
  Example: const express = require('express');
*/





// // i have not intiallised  this with node but still i can use it
// //because internally require takes an id at first it will look in 
// //the node internals. and fs is there.
// const fs =require('fs');

// //then if something is not in the node module it will look
// //in the directory specified by the user.

// const math= require('./math.js');

//  console.log(math.add(2,3));
//  console.log(math.sub(4,3));

// // console.log(math.add(2,3));
// // console.log(math.sub(4,3));

// //this will print the file  name and the directory name you are
// //currenlty in .
// console.log({__filename , __dirname});


// //if something is not even specified by the user then it will check 
// //the npm like const express=require('express');


// /*
