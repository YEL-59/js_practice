console.log(123)
//ovject oriented programming in js

//Encapsulation 
//private and public access modifiers are not available in js but we can achieve it by using closures and symbols in js 


class Players{
    #name;
    constructor(name,birthday,monthlySalary,noOfMonths){
        this.#name=name;
        this.birthday=birthday;
        this.monthlySalary=monthlySalary;
        this.noOfMonths=noOfMonths;
    }
    calculateAge(){
        let currentYear=new Date().getFullYear();
        let year=new Date(this.birthday).getFullYear();
        return currentYear-year;
    }

    calculateTotalSalary(){
        return this.monthlySalary*this.noOfMonths;
    }

}

let player1=new Players("Ronaldo","1985-02-05",10000,12);
console.log(player1.name);//undefined because name is private property of class Player 

// so encaplutaion is like a capsule which contains all the data and methods of a class and it is not accessible from outside of the class 
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Inheritance 
//Inheritance is a mechanism in which one object acquires all the properties and behaviors of a parent object. It is an important part of OOPs (Object Oriented programming system).

//The idea behind inheritance in Java is that you can create new classes that are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class. Moreover, you can add new methods and fields in your current class also.

//Inheritance represents the IS-A relationship, also known as a parent-child relationship.

//Inheritance in js is achieved by using prototype chaining


//Parent class
class Person{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
}
//what is constructor?
//constructor is a method which is called when we create an object of a class
//constructor is used to initialize the properties of a class


//Child class
class Teacher extends Person{
    constructor(name,degree){
        super(name);
        //why use super keyword here?
        //because we want to call the constructor of parent class and we can do it by using super keyword
        this.degree=degree;
    }
    teach(){
        console.log("teach");
    }
}
let teacher1=new Teacher("Ronaldo","MBA");
console.log(teacher1.name);
console.log(teacher1.degree);
teacher1.walk();
teacher1.teach();

//another example of inheritance
class Player extends Person{
    constructor(name,age){
    super(name)
    this.age=age
    }
   

    getPlayerDetails(){
        //console.log(this.name,this.age)
        return `${this.name} is ${this.age} years old`
    }
}
class CricketPlayer extends Player{
    constructor(name,age,runs){
        super(name,age)
        this.runs=runs
    }
    getCricketPlayerDetails(){
        return `${this.name} is ${this.age} years old and he scored ${this.runs} runs`
    }
}

class FootballPlayer extends Player{
    constructor(name,age,goals){
        super(name,age)
        this.goals=goals
    }
    getFootballPlayerDetails(){
        return `${this.name} is ${this.age} years old and he scored ${this.goals} goals`
    }
}

let cricketPlayer1=new CricketPlayer("tamin",36,10000)
console.log(cricketPlayer1.getPlayerDetails())
console.log(cricketPlayer1.getCricketPlayerDetails())

let footballPlayer1=new FootballPlayer("ronaldo",36,1000)
console.log(footballPlayer1.getPlayerDetails())
console.log(footballPlayer1.getFootballPlayerDetails())

//abstraction
//Abstraction is a process of hiding the implementation details and showing only functionality to the user.

//Abstraction lets you focus on what the object does instead of how it does it.

//Abstraction provides you a generalized view of your classes or objects by providing relevant information.

//Abstraction is one of the key concepts of object-oriented programming (OOP) languages. Its main goal is to handle complexity by hiding unnecessary details from the user.

//That enables the user to implement more complex logic on top of the provided abstraction without understanding or even thinking about all the hidden complexity.

//Abstraction can be achieved by using abstract classes and interfaces in js

//abstract class
class BetterArray{
    constructor(){
        if(new.target===BetterArray){
            throw new Error("BetterArray is an abstract class")
        }
        this.array=[]
    }
    insert(value){
        this.array.push(value)
    }
    remove(value){
        this.array=this.array.filter((element)=>element!==value)
    }
    print(){
        console.log(this.array.join(" "))
    }
}

class SortedArray extends BetterArray{
    constructor(){
        super()
    }
    insert(value){
        super.insert(value)
        this.array.sort()
    }
}

let sortedArray1=new SortedArray()
sortedArray1.insert(10)
sortedArray1.insert(5)
sortedArray1.insert(20)
sortedArray1.insert(15)
sortedArray1.print()
sortedArray1.remove(20)
sortedArray1.print()

//polymorphism
//Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

//Any Java object that can pass more than one IS-A test is considered to be polymorphic. In Java, all Java objects are polymorphic since any object will pass the IS-A test for their own type and for the class Object.

//It is important to know that the only possible way to access an object is through a reference variable. A reference variable can be of only one type. Once declared, the type of a reference variable cannot be changed.

//The reference variable can be reassigned to other objects provided that it is not declared final. The type of the reference variable would determine the methods that it can invoke on the object.

//A reference variable can refer to any object of its declared type or any subtype of its declared type. A reference variable can be declared as a class or interface type.

//Example of polymorphism

class Earth{
    constructor(name){
        this.name=name
    }
    rotate(){
        console.log("earth rotates")
    }
}
class Mars extends Earth{
    constructor(name){
        super(name)
    }
    rotate(){
        console.log("mars rotates")
    }
}
let earth1=new Earth("earth")
let mars1=new Mars("mars")
earth1.rotate()
mars1.rotate()



















