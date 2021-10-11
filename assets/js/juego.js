//funcion  de explocion, 
function explosion()
{
    alert("BOOM!!");
    document.write("<h1>Lo siento has perdido elegiste un area minada:(</h1>");
}
// funcion ganadora, muestra en caso de que uno gane
function ganaste()
{
    document.write("Te ganaste un bombon juagador 1 :)");    
}

function ganaste2()
{
    document.write("Te ganaste un bombon juagador 2 :)");    
}

// array de ambos campos 

let campo = [ [ 1 , 1 , 0, 0 ] ,
              [ 0 , 0 , 1, 0 ] ,
              [ 0 , 0 , 0, 1 ] ,
              [ 0 , 0 , 1, 0 ] ,  
              [ 1 , 1 , 0, 0 ]];

let campo2 = [ [ 0 , 1, 1, 0 ] ,
              [ 0 , 1 , 1, 0 ] ,
              [ 0 , 1 , 1, 1 ] , 
              [ 1 , 0 , 0, 1 ] ,
              [ 1 , 0 , 0, 1]];

let textos = ["Cesped", "Bomba"];

// posiciones en x y en y ingresados por el usuario.
let x, y;
let x2, y2; 
alert("Estás en un campo minado\n" +
      "Elije una posición entre el 0 y el 3 para X y para Y entre 0 y 4");

x = prompt("Jugador 1 Posición en X? (entre 0 y 3)");
y = prompt("Jugador 1 Posición en Y? (entre 0 y 4)");

x2 = prompt("Jugador 2 Posición en X? (entre 0 y 3)");
y2 = prompt("Jugador 2 Posición en Y? (entre 0 y 4)");

let posicion = campo[x][y];
let posicion2 = campo2[x2][y2];

console.log(campo[x][y]);
console.log(campo2[x2][y2]);

if(x <= 3 && y <= 4 && x2 <= 3 && y2 <= 4)
{

    if(posicion === 0 && posicion2 === 1)
    {
        explosion();
        ganaste();
    }
    else if (posicion === 0 && posicion2 === 1)
    {
        explosion()
        ganaste2();
    }
    else if (posicion === 0 && posicion2 === 0)
    {
        document.write("es un empate");
    }
    if(posicion === 1 && posicion2 === 1)
    {
        document.write("Ambos pierden");
    }
}
else
{
    document.write("¡Te saliste del campo!");
    explosion();
}
