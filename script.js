"use strict";
// let userName: string = "Arham";
// let age: number = 18;
// let isStudent: boolean = true;
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(userName);
// console.log(age);
// console.log(isStudent);
// // Undefined and Null
// let address: string | undefined;
// let userData: null = null;
// console.log(address);
// console.log(userData);
// // Arrays
// let fruits: string[] = ["Apple", "Mango", "Banana"];
// let marks: number[] = [70, 85, 90];
// let mixedValues: (string | number)[] = ["Arham", 21, "shariq", 45];
// console.log(fruits);
// console.log(marks);
// console.log(mixedValues);
// // Tuples
// let studentInfo: [string, number, boolean] = [
//     "Arham",
//     21,
//     true
// ];
// console.log(studentInfo);
// // Enums
// enum UserRole {
//     User = "User",
//     Admin = "Admin",
//     Manager = "Manager"
// }
// console.log(UserRole.Admin);
// enum ResponseStatus {
//     Success = 200,
//     Created = 201,
//     NotFound = 404
// }
// console.log(ResponseStatus.Success);
// // Unknown Type
// let data: unknown;
// data = "Hello World";
// // Type Narrowing
// if (typeof data === "string") {
//     console.log(data.toUpperCase());
// }
// data = 500;
// if (typeof data === "number") {
//     console.log(data.toFixed());
// }
// data = true;
// if (typeof data === "boolean") {
//     console.log(data);
// }
// // Functions 
// const calculateTotal = (): number => {
//     let price = 500;
//     let quantity = 2;
//     return price * quantity;
// };
// console.log(calculateTotal());
// // Type Safety
// let productName: string = "Laptop";
// let productPrice: number = 5000;
// console.log(productName);
// console.log(productPrice);
// // Type Checking with if
// let score: number = 75;
// if (score > 50) {
//     score = 100;
// }
// console.log(score);
// // Union Types
// let productId: string | number = 101;
// productId = "P-101";
// console.log(productId);
// // Interfaces
// interface Student {
//     name: string;
//     age: number;
//     email: string;
// }
// const student: Student = {
//     name: "Arham Maqsood",
//     age: 18,
//     email: "arhammaqsood40@example.com"
// };
// console.log(student);
// // Interface Extending Another Interface
// interface Account {
//     email: string;
//     password: string;
// }
// interface AdminAccount extends Account {
//     isAdmin: boolean;
// }
// const adminUser: AdminAccount = {
//     email: "admin@example.com",
//     password: "909090",
//     isAdmin: true
// };
// console.log(adminUser);
// //  Merging Interfaces
// interface UserProfile {
//     name: string;
//     age: number;
// }
// interface UserProfile {
//     city: string;
// }
// const profile: UserProfile = {
//     name: "Arham",
//     age: 22,
//     city: "Karachi"
// };
// console.log(profile);
// //  Type Aliases
// type Value = string | number | boolean;
// let myValue: Value = "Hello";
// myValue = 100;
// myValue = true;
// console.log(myValue);
// // Type Alias with Union
// type ID = string | number;
// let userId: ID = 123;
// userId = "USER-123";
// console.log(userId);
// // Intersection Types
// type UserDetails = {
//     name: string;
//     age: number;
// };
// type ContactDetails = {
//     email: string;
// };
// type CompleteUser = UserDetails & ContactDetails;
// const completeUser: CompleteUser = {
//     name: "Shariq",
//     age: 19,
//     email: "shariq@example.com"
// };
// console.log(completeUser);
// Function with Interface
// interface Product {
//     name: string;
//     price: number;
// }
// function showProduct(product: Product): void {
//     console.log(product.name);
//     console.log(product.price);
// }
// showProduct({
//     name: "Mouse",
//     price: 500
// });
// Class
// class ProductItem {
//     constructor(
//         public name: string,
//         public price: number
//     ) {}
// }
// let product1 = new ProductItem("Keyboard", 2500);
// let product2 = new ProductItem("Mouse", 1500);
// console.log(product1);
// console.log(product2);
// Classes and Objects
// class Mobile {
//     brand: string;
//     price: number;
//     constructor(brand: string, price: number) {
//         this.brand = brand;
//         this.price = price;
//     }
// }
// let mobile1 = new Mobile("Samsung", 45000);
// let mobile2 = new Mobile("Infinix", 35000);
// console.log(mobile1);
// console.log(mobile2);
// // Constructors
// class Student {
//     name: string;
//     age: number;
//     email: string;
//     constructor(n: string, a: number, e: string) {
//         this.name = n;
//         this.age = a;
//         this.email = e;
//     }
// }
// let student1 = new Student("Ali", 19, "ali@gmail.com");
// let student2 = new Student("sufiyan", 21, "sufiyan@gmail.com");
// console.log(student1);
// console.log(student2);
// // Access Modifiers public, private and protected
// class BankAccount {
//     public accountHolder: string;
//     private balance: number;
//     protected accountType: string;
//     constructor(holder: string, balance: number, type: string) {
//         this.accountHolder = holder;
//         this.balance = balance;
//         this.accountType = type;
//     }
//     public showBalance(): void {
//         console.log(this.balance);
//     }
// }
// let account1 = new BankAccount("Ali", 5000, "Savings");
// console.log(account1.accountHolder);
// account1.showBalance();
// // account1.balance; 
// // account1.accountType; 
// // Readonly Properties
// class Laptop {
//     constructor(
//         public readonly brand: string,
//         public price: number
//     ) {}
// }
// let laptop1 = new Laptop("HP", 80000);
// console.log(laptop1);
// // laptop1.brand = "Dell"; 
// laptop1.price = 75000;
// console.log(laptop1);
// // Optional Properties
// interface UserProfile {
//     name: string;
//     email: string;
//     age: number;
//     city?: string;
// }
// let user1: UserProfile = {
//     name: "Hasan",
//     email: "hasan@gmail.com",
//     age: 22
// };
// let user2: UserProfile = {
//     name: "Usman",
//     email: "usman@gmail.com",
//     age: 20,
//     city: "Karachi"
// };
// console.log(user1);
// console.log(user2);
// // Parameter Properties
// class Product {
//     constructor(
//         public name: string,
//         public price: number,
//         public category: string
//     ) {}
// }
// let product1 = new Product("Keyboard", 2500, "Accessories");
// let product2 = new Product("Mouse", 1500, "Accessories");
// console.log(product1);
// console.log(product2);
// // Default Parameter Value
// function greetUser(name: string = "Student"): void {
//     console.log("Welcome " + name);
// }
// greetUser("Shariq");
// greetUser();
// getters and setters
// class Student {
//   private userName: string;
//   constructor(name: string) {
//     this.userName = name;
//   }
// Getter
//   get name(): string {
//     return this.userName;
//   }
// Setter
//   set name(newName: string) {
//     this.userName = newName;
//   }
// }
// const student1 = new Student("sufiyan");
// console.log(student1.name);
// student1.name = "Arham";
// console.log(student1.name);
// Normal function
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(10, 20));
// Function expression
// const subtract = function (a: number, b: number): number {
//   return a - b;
// };
// console.log(subtract(20, 5));
// Arrow function
// const multiply = (a: number, b: number): number => {
//   return a * b;
// };
// console.log(multiply(4, 5)); 
// Function type
// let calculate: (a: number, b: number) => number;
// calculate = add;
// console.log(calculate(5, 3)); 
// Optional parameter
// function greet(name: string, age?: number): void {
//   console.log(`Hello ${name}`);
//   if (age !== undefined) {
//     console.log(`Age: ${age}`);
//   }
// }
// greet("Arham");
// greet("Ali", 20);
// Default parameter
// function welcome(name: string, message: string = "Welcome") {
//   console.log(`${message}, ${name}!`);
// }
// welcome("Arham");
// welcome("Ali", "Good morning");
// function sum(...numbers: number[]): number {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// Rest Parameters
// console.log(sum(10, 20));     
// console.log(sum(10, 20, 30));   
// console.log(sum(1, 2, 3, 4, 5)); 
// function showNames(...names: string[]): void {
//   names.forEach((name) => {
//     console.log(name);
//   });
// }
// showNames("Arham", "Ali", "Ahmed");
// Function Overloads
// function format(value: string): string;
// function format(value: number): string;
// function format(value: string | number): string {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   }
//   return value.toFixed(2);
// }
// console.log(format("typescript"));
// console.log(format(25));          
// Generic Interface
// interface Box<T> {
//   value: T;
// }
// const numberBox: Box<number> = {
//   value: 100
// };
// const stringBox: Box<string> = {
//   value: "Hello TypeScript"
// };
// console.log(numberBox.value);
// console.log(stringBox.value);
