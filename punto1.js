const frutas = ['mango, mandarina, mora'];
const jugos = [];

frutas.push('lima', 'limón');
frutas.unshift('lulo');

frutas.splice( 2,0,'kiwi');

frutas[0] = "mangostino";

for (let i = 0; i < frutas.length; i++) { 

    console.log(frutas[i]);
}

for (let i = 0; i < frutas.length; i++) {
    const frutaActual = frutas[i];
  
    
    if (frutaActual === "mango" || frutaActual === "mandarina" || frutaActual === "mora" || frutaActual === "limón") {
        const nombreJugo = `Jugo de ${frutaActual}`;
        jugos.push(nombreJugo);
    }
  }
  
  console.log( frutas );
  
  for (let i = 0; i < jugos.length; i++) {
    console.log(jugos[i]);
  }