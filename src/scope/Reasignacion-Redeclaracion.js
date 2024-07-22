//........................var........................

var firstName ; // Se le asigna un valor 'Undefined'
firstName = 'Oscar'
console.log(firstName);

var lastName = 'David';  //declarar / asignar al mismo tiempo 
lastName = 'Ana'; //Reasignando
console.log(lastName); // Se asigna como valor final  Ana

var secondName = 'David';  //declarar / asignar
var secondName = 'Ana'; //reasignando
console.log(secondName); //


// ........................let.............................. 

let fruit = 'Apple' // declara y dsigna
fruit = 'kiwi'; //reasigna
console.log(fruit);

// let fruit = 'Banana'; NO se puede declarar nuevamente ya que se puede romper la aplicaion
console.log(fruit);


//............................const...................

const animal = 'Dog'; // declara y dsigna
//animal = 'cat'; //reasignando
const animal2 = 'snake';
console.log(animal);
console.log(animal2);

const vehicles = []
vehicles.push('carro1');
console.log(vehicles);
vehicles.pop();
console.log(vehicles);