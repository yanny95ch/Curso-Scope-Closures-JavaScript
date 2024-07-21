//Variables

var a; // Declarando
var  b = 'b ' // Declaramos y asignamos 
b = 'bb' // Reasignando el valor que se tiene 
var a = 'aa' //Redeclaracion 

//Global Scope

var fruit = 'Apple' //global
console.log(fruit);
function bestFruit (){
    console.log(fruit);
}
bestFruit();

function countries(){
    country = 'Colombia';//Global
    console.log(country);
}
countries()
console.log(country);

