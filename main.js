//Creating p element and adding text
var div=document.getElementById("div")
var arr=["I am the first text","I am the second text", "I am the third text",
"I am the fourth text"];
function myFunc(value){
    var p=document.createElement("p");
    p.innerHTML=value;
    div.appendChild(p);

}
arr.map(myFunc);
//Adding random colors
for(var i of arr){
    var p=document.createElement("p");
    p.innerHTML=i;
    div.appendChild(p);
    p.onclick=function(){
        this.style.color=randomColor();
    }
}
function randomColor() {
    var color = "#",
        alph = "0123456789ABCDEF";
    for (var i = 0; i <  6; i++)
        color += alph[(Math.floor(Math.random() *  16))];
    return color;
}
//change text
var newText=document.getElementsByTagName("p");
newText[0].innerHTML="I am changed";
//Adding some style to p element
function changeColor(){
    var nodes= document.getElementsByTagName("p");
    nodes[1].style.color='green';
    nodes[2].style.color='red';
    nodes[3].style.color="purple";
}
//Adding some style to p element
function changeFontsize(){
    var elem=document.getElementsByTagName("p")
    elem[0].style.fontSize="18px";
    elem[1].style.fontSize="24px";
    elem[2].style.fontSize="36px";
    elem[3].style.fontSize="48px";
}
//Changing BG Color
function changeBgColor(){
    document.body.style.backgroundColor="pink"
}
//DOM Node List Length
var x=document.getElementsByTagName("p");
for(var i=0; i<x.length; i++){
console.log(x[i].innerHTML)
}
//apendChild,createElement
var newList=document.createElement("li");
var textNode=document.createTextNode("attributes ");
newList.appendChild(textNode);
document.getElementById("myList").appendChild(textNode)
//removeChild
function myFunction (){
var list=document.getElementById("myList")
list.removeChild(list.childNodes[0])
}
