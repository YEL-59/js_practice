// // function example

// function calage(Birthyear){
//     return 2037-Birthyear

// }
// function yearsuntilretirment(Birthyear,firstname){

//     const age=calage(Birthyear)
//     const retirment=65-age
//     if(retirment>0){
//         return console.log( `Hi! Name ${firstname} retires in the age of ${retirment} years`)
//     }else{
//         return -1
//         console.log( `Hi! Name ${firstname} retires  years`)
//     }
//     //return `Hi! Name ${firstname} retires in the age of ${retirment} years`

// }

// console.log(yearsuntilretirment(190,'jonas'))



// const calAverage=(a,b,c)=>{
//     return (a+b+c)/3
// }
// console.log(calAverage(3,4,5))
// //Test 1
// let scoreDolphins= calAverage(44,23,71)
// let scoreKolas=calAverage(65,54,49)

// console.log(scoreDolphins,scoreKolas)

// const checkWinner=function(avgDolphins,avgKolas){
//     if(avgDolphins>=2*avgKolas){
//         console.log(`Dolphins is winner (${avgDolphins} vs ${avgKolas})`)
//     }else if(avgKolas>=2 *avgDolphins){
//         console.log(`kolas is winner (${avgKolas} vs ${avgDolphins})`)
//     }else{
//         console.log('no team wins...')
//     }
// }

// checkWinner(scoreDolphins,scoreKolas)
// checkWinner(576,111)
// checkWinner(111,600)
// //Test2
// scoreDolphins=calAverage(85,54,41)
// scoreKolas=calAverage(23,34,27)
// console.log(scoreDolphins,scoreKolas)
// checkWinner(scoreDolphins,scoreKolas)



//Array

// const friends=['a','b','c']
// console.log(friends)

//const years=new Array(1,2,3,4)
//console.log(years)

// console.log(friends[0])

// console.log(friends.length)
// friends[1]='ok'
// console.log(friends)

// function calage(Birthyear){
//     return 2037-Birthyear

// }

// const years=[1990,1967,2002,2010,2018]

// console.log(calage(years))

// const age1=calage(years[0])
// const age2=calage(years[1])
// const age3=calage(years[years.length-1])
// console.log(age1,age2,age3)
// const ages=[calage(years[0]),calage(years[1]),calage(years[years.length-1])]
// console.log(ages)

// console.log(friends.push('tofayel'))

// for(let rep=1;rep<=10;rep++){
//     console.log('yeah it is easy rep is${rep}')
// }

// const jonasArray=[
//     'jonas',
//     '123',
//     'ok',
//     ['w','e','t'],
//     true
// ]
// const types = []
// for(let i=0;i<jonasArray.length ;i++){
//     console.log(jonasArray[i],typeof jonasArray[i])
// //filling types of array
//     //types[i]=typeof jonasArray[i]
//     types.push(typeof jonasArray[i])
// }
//types[0]='string'
// console.log(types)

// const y= [1991,2007,1996,2020]
// const a=[]
// for(let i=0;i<y.length;i++){
//    // if(typeof jonasArray[i] !== 'string') continue
//     a.push(2037-y[i])
// }
// console.log(a)
console.log('---ONLY STRINGS---')
const jonasArray=[
    'jonas',
    '123',
    'ok',
    ['w','e','t'],
    true
]
const types = []
for(let i=0;i<jonasArray.length ;i++){
    if(typeof jonasArray[i] !== 'string') continue
    console.log(jonasArray[i],typeof jonasArray[i])
//filling types of array
    //types[i]=typeof jonasArray[i]
    types.push(typeof jonasArray[i])
}
console.log(123)


const flight = 'LH234'
const jonas={
    name:'jonas islam',
    passport:123456789,
    ticket:123456789,

}

const checkin=function(flightNum,passenger){
    flightNum='LH999'
    passenger.name='Mr.'+ passenger.name;
if(passenger.passport === 123456789){
    alert('check in')
}else{
    alert('wrong passport')

}
}
checkin(flight,jonas)
console.log (flight)    
console.log(jonas)



