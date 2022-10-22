//oop
//class, methods, abstraction, encapsulation, inheritance, polymorphism

//person.name person.add

// var rect={
//    w=10,
//     h=20,
//     ca:function(){
//    return w*h

//     }
// }



//class==> it is all about frame,template .one frame use's many times


//abstraction

//Encapsulation

//inheritance

//polymorphism


//object literal

// var rect ={
//     width:100,
//     height:50,

//     draw:function(){
//         console.log('i am rectengale')
//         this.printProperties()
//     },

//     printProperties:function(){
//         console.log('My width is '+ this.width)
//         console.log('My height is'+ this.height)
//     }

// }

// rect.draw()
// rect.height=100
// rect.draw()
// for(var i=0;i<10;i++){
//     rect.draw()
// }

//This trams

// function myFunc(){
//     console.log(this)
// }
// myFunc()
//new myFunc()

//Factory pattern

var creatRect=function(w,h){
    return{
        width:w,
        height:h,
    
        draw:function(){
            console.log('i am rectengale')
            this.printProperties()
        },
    
        printProperties:function(){
            console.log('My width is '+ this.width)
            console.log('My height is'+ this.height)
        }
    
    }

}


var rect1 =creatRect(10,8)
rect1.draw()
var rect2 =creatRect(11,9)
rect2.draw()


//constructor pattern

var Rectangle=function(w,h){
    this.width=w
    this.height=h

   this. draw=function(){
        console.log('i am rectangle')
        this.printProperties()
    }

    this.printProperties=function(){
        console.log('My width is '+ this.width)
        console.log('My height is'+ this.height)
    }
}

var rect3= new Rectangle(109,8)
rect3.draw()














