// 1.find n+nn+nnn
function gumar(n){
    var nn=2*n;
    var nnn=3*n;
    return String(n)+String(nn)+String(nnn);
    }
    console.log(gumar(3));
    console.log(gumar(17));
    console.log(gumar(100));
// 2.Average value
function medium(num1, num2, num3, num4, num5) {
    var sum=num1 + num2 + num3 + num4 + num5;
    console.log(sum/5);
    }
    medium(45,-12,0,3,-15);
    medium(7,52,4,0,-23);
// Growing order
    var points=[45,26,78];
    points.sort(function(a,b) {return b-a});
    console.log(points.sort());
// 4.Current day and time
    function getDay(){
        var day = "Today is";
        switch(new Date().getDay()){
        case 0:
        day+= "Sunday";
        break;
        case 1:
        day+= "Monday";
        break;
        case 2:
        day+= "Tuesday";
        break;
        case 3:
        day+= "Wednesday";
        break;
        case 4:
        day+= "Thursday";
        break;
        case 5:
        day+= "Friday";
        break;
        case6:
        day+= "Saturday";
        return day; 
    }
function getTime(){
        var str="Current time is: ";
        var today= new Date();
        var time= today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
        var hour=str+time;
        return hour;
    }
    console.log(getDay() + "\n" + getTime());
// 5.from end to start
    function order (param1) {
    param1=String(param1);
    return param1.split("").reverse().join("");
    }
    console.log(order(34225)); 
// 6.Alphabetical order
    function alph (str) {
    return str.split("").sort().join("");
    }
    console.log(alph("webmaster"));	
// 7.Doing math
var a=15;
var b=4;
function math(a,b){
return a+b;
return a-b;
return a*b;
return a/b;
return a%b;
}
console.log(a+b, a-b, a*b, a/b, a%b);
