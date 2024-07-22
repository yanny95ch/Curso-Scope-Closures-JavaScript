function greeting (){
    let userName = 'Lulito'
    console.log(userName);

    if (userName === 'Lulito') {
       console.log(`hello ${userName}`); 
    }
}
greeting();
console.log(userName);

//Podemos llamar la variable dentro de la funcion unicamente console.log(userName); en este caso nos dara error porque la estamos invocando fuera de la F