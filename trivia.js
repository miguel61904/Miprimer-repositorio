let formulario = document.getElementById("triviador");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let dificultad = document.getElementById("dificultad");
let tipo = document.getElementById("type");
let contpreguntas = document.getElementById("questionsContent");

let preguntas;
let qindex = 0;
let answersOptions = [];

let funData = e =>{
    e.preventDefault();
   // let url = `https://opentdb.com/api.php?amount=${cantidad.value}10&category=${categoria.value}15&difficulty=${dificultad.value}medium&type=${tipo.value}`;
   let url = `https://opentdb.com/api.php?amount=10`;
    fetch(url)
    .then(respuesta => {return respuesta.json();})
    .then(datos =>{
        preguntas = datos.results;
        iniciar(datos);
    })
};

const iniciar = (preguntas) =>{
    contpreguntas.style.display = "flex";
    formulario.style.display = "none";
    console.log(preguntas);
    pregunta = preguntas.results;
    let preguntaactual = pregunta[qindex];
    document.getElementById("questionName").innerText = preguntaactual.question;

    answers = preguntaactual.incorrect_answers.toString();
    correct = preguntaactual.correct_answer;
    options(answers, correct)
};

const  shuffleArray = (inputArray) => {
    inputArray.sort(()=> Math.random() - 0.5);
}


const options = (answers, correct) => {
        console.log(answers)
        console.log(correct);
        answersOptions = answers.split(",");
        answersOptions.push(correct);
        console.log(answersOptions);
        shuffleArray(answersOptions);

        for (let n = 0; n < answersOptions.length; n++) {
            document.getElementById("answersButtons").innerHTML += '<button type="button">'+answersOptions[n]+'</button>'
            
        }
}
const selectrespu = id =>{
    console.log(id);
    let answersId = id;
    if(answersId === correct){

    }else{

    }
}

for (let i = 0; i < answersOptions.length; i++){
    const element = answersOptions[i];
    element.addEventListener("click", selectrespu(element.id));
}

formulario.addEventListener("submit", funData);