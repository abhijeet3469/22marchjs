// continue 'this'-
// definition of this keyword
// 'this' refers to the object from where the function is called.
// note:- value of 'this' is determined at runtime
// e.g.
// function sayHi(){
//     console.log(this);
// }

// let sayHiArrow = () => {
//     console.log(this);
// }
// let user = {
//     name: 'Abhijeet',
//     sayHiObject (){
//         console.log(this);
//     }
// }
// // window.sayHi(); // we are invoking the function from inside the window object
// // sayHi(); // window
// // sayHiArrow(); // window
// user.sayHiObject(); // user

// e.g. consoling from window object
// var a = 10;
// console.log(a);
// console.log(window.a);

// call, apply and methods-
// e.g.
// let user = {
//     firstName: 'Rahul',
//     sayHi() {
//         console.log(this.firstName);
//     }
// }
// function hello() {
//     console.log('hello', this.firstName);
// }
// let admin = {
//     firstName: 'Prateek'
// }
// user.sayHi(); // Rahul
// console.log(user.sayHi); // Function Definition
// user.sayHi.call(admin); // call accept argument which is the other object and value of 'this' inside sayHi (Prateek)
// user.sayHi.call(user); // Rahul
// // -----------------------------------------------------------------------------------------------------------------
// hello(); // hello undefined because this is window object and there is no firstName variable over here
// console.log(hello); // function definition
// (hello.call(admin)); // hello Prateek
// hello.call(user); // hello Rahul
// hello.apply(user); hello Rahul (same as call)
// hello.apply(admin); // hello Prateek (same as call)

// e.g. difference between call and apply - in call we use comma and in apply we use array
// let user = {
//     firstName: 'Rahul',
//     sayHi() {
//         console.log(this.firstName);
//     }
// }
// function hello(a, b) {
//     console.log('hello', this.firstName);
//     console.log(a, b);
//     console.log('----------------------');
// }
// let admin = {
//     firstName: 'Prateek'
// }
// hello(5, 4);
// hello.call(user, 5, 4);
// hello.call(admin, 7, 8);
// hello.apply(user, [4, 5]);
// hello.apply(admin, [2, 4]);

// bind function:- call and apply were executing the function directly...bind return me function with new value of 'this'; does not directly execute function.
// let user = {
//         firstName: 'Rahul',
//         sayHi() {
//             console.log(this.firstName);
//         }
//     }
//     function hello() {
//         console.log('hello', this.firstName);
//     }
//     let admin = {
//         firstName: 'Prateek'
//     }
// hello()
// hello.call(admin);
// hello.bind(admin); // nothing will print because bind does not directly executes the function so i need to capture it in somewhere
// let newHello = hello.bind(admin); // now, newhello will become function, so i have to call the function
// newHello()
// hello.bind(admin)() // shorter way for bind

// e.g.
// let user = {
//     firstName: 'Rahul',
//     sayHi() {
//         console.log(this.firstName);
//     }
// }
// function hello(a, b) {
//     console.log('hello', this.firstName);
//     console.log(a, b);
//     console.log('----------------------');
// }
// let admin = {
//     firstName: 'Prateek'
// }
// let newFunc = hello.bind(admin) // bind takes only one argument
// newFunc(1,2)
// hello.bind(admin)(1, 2) // here second argument is the argument of new function

// call, bind and apply are used to re-build the value of 'this' to another object.

// e.g.
// var message = 'Hello, Earth';
// const obj = {
//     message: 'Hello, World'
// }
// function print(){
//     console.log(this.message);
// }
// print(); // Hello, Earth
// print.call(obj); // Hello, World
// print.apply(obj); // Hello, World
// print.bind(obj)(); // Hello, World

// Map and Set:-
// Map:- map is a collection of keyed data items just like an object. the main difference between a map and an object is that a map allows keys of any type
//       but object allow only string type.
// new Map() - to create new map (methods and properties)
// to add new property to the object you can directly write equal to sign and then you can write value of that key and then that property gets added to object.
// but in case of map- map.set(key, value) and simlilarly to retrieve map.get(key) - key as an argument and value will be output.
// map.has(key) returns me a boolean value.
// lets start-
// e.g.
// let myMap = new Map()
// myMap.set(1, 'num1') // a numeric key
// myMap.set('1', 'str1') // a string key
// myMap.set(true, 'bool1') // a boolean key
// console.log(myMap);
// console.log(myMap.get(1));
// console.log(myMap.get('1'));
// console.log(myMap.size);
// // delete method take in key as a argument and then removes that property
// console.log(myMap.delete('1'));
// console.log(myMap);
// // clear method removes everything from the map
// myMap.clear();
// console.log(myMap);
// // All the above methods are chainable that is i can use one after the other.
// myMap.set('1', 'str1').set(1, 'num1').set(true, 'bool1')
// console.log(myMap);3

// e.g. another method to create map- for method - we get array over here
// let fruitMap = new Map([
//     ['banana', 40],
//     ['kiwi', 160],
//     ['apple', 60]
// ])
// for(let item of fruitMap){
//     console.log(item)
//     console.log('key is', item[0], '&', 'value is', item[1]);
// }

// e.g. Map Iterator using values and keys-
// let fruitMap = new Map([
//     ['banana', 40],
//     ['kiwi', 160],
//     ['apple', 60]
// ])
// console.log(fruitMap.values()); // but here we cannot use
// console.log(fruitMap.keys()); // but here we can't use
// let valueArray = Array.from(fruitMap.values());
// let keyArray = Array.from(fruitMap.keys());
// console.log(valueArray); //now here we can apply all array methods on valueArray and keyArray
// console.log(keyArray);

// e.g. for of method using values and keys only
// let fruitMap = new Map([
//         ['banana', 40],
//         ['kiwi', 160],
//         ['apple', 60]
//     ])
//     for(let item of fruitMap.keys()){
//         console.log(item);
//     }
// for(let item of fruitMap.values()){
//             console.log(item);
//         }

// e.g. forEach
// let fruitMap = new Map([
//     ['banana', 40],
//     ['kiwi', 10],
//     ['apple', 60]
// ])
// fruitMap.forEach((value, key) => {  // forEach takes in callback arrow function and takes in two parameter; first one is value and second one is key for map only.
//     console.log(value, key);

// })