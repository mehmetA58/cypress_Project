//program for a simple calculator

//take the operator input
const operator=prompt("Yapmak istediginiz islemi secin")

//take the operand input

const Number1=parseFloat(prompt("ilk sayiyi giriniz"))
const Number2=parseFloat(prompt('ikinci sayiyi giriniz'))

let result;

if (operator=='+') {
    result=Number1+Number2
} else if(operator=='-'){
    result=Number1-Number2
}else if(operator=='*'){
result=Number1*Number2
}else if(operator=='/'){
    result=Number1/Number2
}else{
    console.log("Yanlis bir işlem seçtiniz")
}
console.log(result)

/*
//program for a simple calculator

//take the operator input
const operator=prompt("Yapmak istediginiz islemi secin")

//take the operand input

const Number1=parseFloat(prompt("ilk sayiyi giriniz"))
const Number2=parseFloat(prompt('ikinci sayiyi giriniz'))

let result;

switch(operator){
    case '+' :
        console.log(Number1+Number2)
        break

    case '-':
        console.log(Number1-Number2)
        break
    
    case '*':
        console.log(Number1*Number2)
        break    

    case '/':
        console.log(Number1/Number2)
        break
        default:
            console.log("Yanlış bir işlem girdiniz")    
}*/