//1.Is typof string.

var str="569";
console.log(typeof(str));

//2.String length.
    
var sentence="";
console.log(sentence.length);
    
//3.split method to create array.
    
var str="I am that sentence";
console.log(str.split(","));
    
//4.Abbrevation"
    
var str="Anun Azganun";
console.log(str.slice(0,6));
//Or
console.log(str.substring(0,6));

//5.upperCase string's first letter
var str="hello my dear students";
console.log(str.replace("hello", "Hello"));
console.log(str.charAt(0).toUpperCase() + str.slice(1));
