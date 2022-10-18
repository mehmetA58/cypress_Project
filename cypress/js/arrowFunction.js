//Arrow Functions

var arrow =a => a+100
console.log(arrow(10))

var arrow1=(a,b)=>a+b
console.log(arrow1(10,20))

//program for a simple calculator

//take the operator input
const operator=prompt("Yapmak istediginiz islemi secin")

//take the operand input

const Number1=parseFloat(prompt("ilk sayiyi giriniz"))
const Number2=parseFloat(prompt('ikinci sayiyi giriniz'))


var top=(Number1,Number2)=>(Number1+Number2)
console.log(top(Number1,Number2))

var cık=(Number1,Number2)=>(Number1-Number2)
console.log(cık(Number1,Number2))

var carp=(Number1,Number2)=>(Number1*Number2)
console.log(carp(Number1,Number2))

var bol=(Number1,Number2)=>(Number1/Number2)
console.log(bol(Number1,Number2))

if(operator=='+'){
top()
}else if(operator=='-'){
cık(Number1,Number2)
}else if(operator=='*'){
    carp()
}else if(operator=='/'){
    bol()
}else{
    console.log("Yanlis birseyler oldu...")
}