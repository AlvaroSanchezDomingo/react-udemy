//************Defining and assiging
var nameVar = 'Alvaro'
var nameVar = 'Mike'//var allows you to redifine and reasign
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Julie' //Let doesnt allow you to redefine a variable but allow to reasign it
console.log('nameLet', nameLet)

const nameConst = 'Frank'
//const nameConst = 'alvaro' //Let doesnt allow you to redefine
//nameConst = 'alvaro' //Let doesnt allow you to assign it
console.log('nameConst', nameConst)



//*************block scoping 
var fullName = 'Alvaro Sanchez'

let firstName
if(fullName){
    //var firstName = fullName.split(' ')[0] //allows to access the var outside de block
    //const firstName = fullName.split(' ')[0]//doesnt allow to access the const outside de block
    firstName = fullName.split(' ')[0]//doesnt allow to access the let outside de block
}
console.log(firstName)