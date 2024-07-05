# OBJECTS in JavaScript
In this lesson we have learned about objects in JavaScript. How to define them, how to access their properties and data structures.

## What is an object?
An object is a collection of properties, and a property is an association between a name (or key) and a value. 
Values can be primitive data types, arrays, other objects, or even functions.

## How to define an object?
There are two ways to define an object in JavaScript:

1. Using the object literal syntax: 
```javascript
const person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'swimming'],
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};
```

2. Using the `new Object()` syntax:
```javascript
const person = new Object();
person.name = 'John';
person.age = 30;
person.hobbies = ['reading', 'swimming'];

```
`new Object()` is not commonly used, but it is good to know that it exists. We'll mostly use the object literal syntax for now. Later in the course, we'll learn when the `new Object()` syntax is useful.

## How to access object properties?
There are two ways to access object properties in JavaScript:

1. Using the dot notation:
```javascript
console.log(person.name); // John
```

2. Using the bracket notation:
```javascript
console.log(person['name']); // John
```

The bracket notation is useful when the property name is stored in a variable:
```javascript
const propertyName = 'name';

console.log(person[propertyName]); // John
```

Remember the example in class with the prompt in the browser? We used the bracket notation to access the property name stored in the variable (check the js files in this repo).


## Data structures
Objects can store different data structures, such as arrays or other objects. 
Remember the PokeAPI example in class? 
Data is stored there in a nested structure, with objects inside objects. We need to know the structure of the data to access the information we need properly.

More information in the portal and examples. 