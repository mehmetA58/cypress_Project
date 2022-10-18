//object

var person={
    fName:"Ali",
    fSurname:"Can",
   age:35
}
console.log(person)
console.log(typeof(person))
console.log(typeof(person.fName))
console.log(typeof(person.age))

console.log("Person Name : "+person.fName)

const person1={
   fName:"Ali",
   fSurname:"Can",
  age:35,
  adress:{

   A:"madimak",
   B:"falan filan",
   C:"fesmekan"

  }
}
console.log(person1)
console.log("Adres A Name : "+person1.adress.A)
console.log("Adres A Name : "+person1.adress.C)
//Ali -->Han
person1.fName='Han'
person1[2]="male"

console.log(person1)



