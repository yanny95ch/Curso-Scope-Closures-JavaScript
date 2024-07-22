const myGlobal = 0;

function myFunction(){
    const myName = 1;
    console.log(myGlobal);

    function parent(){ //funcion interna => ya tenemos un closure
        const inner = 2;
        console.log(myName,myGlobal);
       

        function child (){
            console.log(inner, myGlobal, myName);
        }
        return child()
    }
    return parent()
}

myFunction()