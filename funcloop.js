// 1. a->toUpperCase
function word(str) {
    var newStr = "";
    for (var i=0; i<str.length; i++) {   
        if (str[i] === "a") {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }

    return newStr;
}
  
console.log(word("Declaration"));
// 2.  Polindrome
function palindrome(word) {
    var firstWord = word.toUpperCase();
    var newWord = "";

    for (var i = word.length - 1; i >= 0; i--) {
        newWord += firstWord[i];
    }

      if (firstWord === newWord) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome("subbus"));
console.log(palindrome("subbun"));
// 3. Concatenation
var repeat = function(str, count) {
    var array = [];
    for(var i = 0; i < count;)
        array[i++] = str;
    return array.join('');
}
console.log(repeat('Ha!',1));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
//4. array sum
function sum(array){
	var total=0;
	for(var i=0; i<array.length; i++){
	total=total+array[i];
}
return total;
}
console.log(sum([1,5,6,8,10]));

//5. growing order/while
var points=[8,25,12,36];
var i;
points.sort(function(a,b){return a-b});
while(i<points.length){
    points.sort()
}
console.log(points)

//6. growing order/do,while
var points=[8,25,12,36];
var i;
do{points.sort(function(a,b){return a-b})}
while(i<points.length)
console.log(points)

//7. largest num 
var number= [12859,465468,32165,26565,65846878];
for(let i=0; i<number.length; i++){
    if(number[4] > number[i]){
        console.log(true)
    }
}