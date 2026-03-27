
const fs = require('fs');

// function random(res) {
//   console.log("Random is called")
//   setTimeout(res, 3000);
// }

// let p = new Promise(random)

// function callback() {
//   console.log("Promise succeded")
// }

// p.then(callback)

// ---------------------------------------------------------------
// function readTheFile(res, rej) {
//   fs.readFile("a.txt1", "utf-8", function(err, data) {
//     if (err) {
//       rej(err)
//       console.log("Promise is rejected")
//     }
//     else {
//       res(data)
//       console.log("Promise is resolved")
//     }
//   })
// }


// function readFile() {
//   return new Promise(readTheFile);
// }


// function callback(content) {
//   console.log(content);
// }

// readFile().then(callback).catch(function (err) {
//   console.log("error is :", err);
// });

// ------------------------------------------------------------------------------------

function readTheFile(res, rej, fileName) {
  fs.readFile(fileName, "utf-8", function(err, data) {
    if (err) {
      rej(err)
      console.log("Promise is rejected")
    }
    else {
      res(data)
      console.log("Promise is resolved")
    }
  })
}

function readFile(fileName) {
  return new Promise((res, rej) => {
    readTheFile(res, rej, fileName);
  });
}


function callback(content) {
  console.log(content);
}

readFile("a.txt").then(callback).catch(function (err) {
  console.log("error is :", err);
});