// 1.If age is >=18
var person={
    fname: "Shushan",
    lname: "Kar",
    age: 22,
}
    if(person.age >= 18){
      console.log("string")
    }

// 2.Argument type
var x;
let obj = {
   0: typeof 5,
   1: typeof "tring",
   2: typeof true,
   3: typeof x,
   4: "object"
}
function typeOf(argument){
for(i in obj){
       if(typeof argument == obj[i] && argument !== null){
           console.log(argument + "@ " + obj[i] + " e");
       } 
        else if(typeof argument !== obj[i] ){
           console.log(argument + "@ " + obj[i] + " che ");
       } else if(argument === null){
            console.log(argument + "@ " + null + " e");
 
}
}    
}
typeOf(5);
typeOf("string");
typeOf(true);
typeOf(null);
typeOf({});

// 4. hasOwnProperty
var cars = {
    blue: "Volvo",
    green: "Lexus",
    black: "BMW"
};
function myFunction (blue){
    cars.hasOwnProperty("blue")
        return (true)
    }
console.log(myFunction())

//5. deleting(with loop)
var fruits={
    ap: "Apple",
    ba: "Banana",
    st: "Strawberry"
}
for(Object.keys in fruits){
    delete fruits.st
}
console.log(fruits)

// 6. obj length
var color={
   rd: "red",
   bl: "blue",
   gr: "green",
   yl: "yellow",
   or: "orange"
}
console.log(Object.keys(color).length)
//7 Array
var colors=["blue", "red", "yellow", "white", "black"];
console.log(colors[0]);//Access the first color in the array
console.log(colors[2]);//Access the third color in the array
colors[4]="ultraviolet";//Change the value of the last color
var fourthColor=["white"];//Create a new var and set it equal to the fourth color in the list.
colors[3]=fourthColor;
colors[5]=["black"];//Add another color to the end of the list
colors.unshift("purple")//Add another color to the beginning of the list
console.log(colors.length)//Print the length of the array
for(var i=0; i<colors.length; i++){
    console.log(colors[i])
}//Write a code to iterate through every color in the array and print each color's value
for (var i = 0; i < colors.length; i++){
  console.log(i + ": " + colors[i]);
}//print every color's value and every color's index
var len=colors.length-1;
var lastColor=colors[len];
console.group(lastColor)//Write a code that will always point to the last element of the colors array

//Object
var obj={
character: "Alfred",
origin: "Zig et Puce",
creator: "Alain Saint-Ogan"
};
console.log("Hello, I'm a penguin and my name is " + obj.character)//print the penguin's name wthe welcome message
obj.canFly=false;//Add a new property
obj.sayHello=function (){
  console.log("Hello, I'm a penguin and my name is " + this.character)  
}
obj.sayHello()//Use keword this
obj.character="Penguin McPenguinFace";
obj.sayHello()//Check if it works with any name 
obj.fly=function (){
  if(this.canFly) {
      console.log("I can fly!")
  } else{
      console.log("No flying for me")
  }
}
obj.fly()//Using if/else
obj.canFly=true;
obj.fly()//Checking
for(i in obj){
    console.log(i)
}//Print each key to the console
for(i in obj){
    console.log([i])
}//Print the value of each key to the console
