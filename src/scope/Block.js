function fruits(){
  if (true) {
    var fruit1 = 'Apple';// Funcion  Scope
    let fruit2 = 'Kiwi'; // Block Scope
    const fruit3 = 'Banana';// Block Scope
    console.log(fruit2);
    console.log(fruit3);
  }
    console.log(fruit1);

}
fruits()

//DOnde se agregan las palabras reservadas  let y const 