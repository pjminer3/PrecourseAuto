var fs = require('fs');
var path = __dirname + '/server/client/ClassContainer/'+process.argv[2]+'/'+process.argv[3]+'/recursion/src/'
console.log(path)
fs.exists(path+"getElementsByClassName.js",function(exists){
  console.log(exists)
})
console.log(process.argv[2], process.argv[3])
fs.readFile(path+"getElementsByClassName.js","utf-8", (err, data) => {
  if (err) throw err;
  var string = data;
  var match = string.match(/var getElementsByClassName = function\(.*\) {/)
  string = string.replace(match[0],"\nvar counter = 0; \n" + match[0] + " \ncounter++ \nif(counter > 2000){\n\treturn\n}")
  fs.writeFile(path + "getElementsByClassName.js",string,(err, data) => {
    if(err) throw err;
    console.log("done!")
  })
});
fs.readFile(path+"parseJSON.js","utf-8", (err, data) => {
  if (err) throw err;
  var string = data;
  var match = string.match(/var parseJSON = function\(.*\) {/)
  string = string.replace(match[0],"\nvar counter = 0; \n" + match[0] + " \ncounter++ \nif(counter > 2000){\n\treturn\n}")
  fs.writeFile(path + "parseJSON.js",string,(err, data) => {
    if(err) throw err;
    console.log("done!")
  })
});
fs.readFile(path+"stringifyJSON.js","utf-8", (err, data) => {
  if (err) throw err;
  var string = data;
  var match = string.match(/var stringifyJSON = function\(.*\) {/)
  string = string.replace(match[0],"\nvar counter = 0; \n" + match[0] + " \ncounter++ \nif(counter > 2000){\n\treturn\n}")
  fs.writeFile(path+"stringifyJSON.js",string,(err, data) => {
    if(err) throw err;
    console.log("done!")
  })
});
