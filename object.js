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