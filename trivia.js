//Elementos HTML
localStorage.removeItem("contador");
localStorage.removeItem("suma_preguntas_correctas");
localStorage.setItem("contador", 0);
let triviaForm = document.getElementById("trivia");
let questionsContainer = document.getElementById("questionsContent")
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let difficulty = document.getElementById("difficulty");
let type = document.getElementById("type");

//Variables de control 
let correctIndexAnswer;
let questions;
let qIndex = 0;
let scoreOk = 0;



//Funciones
let getApiData = (e) => {
    e.preventDefault();
    let url = `https://opentdb.com/api.php?amount=${amount.value}&category=${category.value}&difficulty=${difficulty.value}&type=${type.value}`;
    fetch(url).then(response => {
        return response.json()
    }).then(data => {
        questions = data.results;
        console.log(questions);
        startGame();
    });
};

const startGame = () => {
    questionsContainer.style.display = "flex";
    triviaForm.style.display = "none";
    document.getElementById("question_index").innerText = 1;
    document.getElementById("num_questions").innerText = questions.length;
    cambiarPregunta(0);
};




const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");

btn1.addEventListener(`click`, (event) => {
    validarPregunta(event.target.innerText)
});
btn2.addEventListener(`click`, (event) => {
    validarPregunta(event.target.innerText)
});
btn3.addEventListener(`click`, (event) => {
    validarPregunta(event.target.innerText)
});
btn4.addEventListener(`click`, (event) => {
    validarPregunta(event.target.innerText)
});




function validarPregunta(respuesta) {
    var index = parseInt(localStorage.getItem("contador"));
    var suma_preguntas_correctas = localStorage.getItem("suma_preguntas_correctas") ? localStorage.getItem("suma_preguntas_correctas") : 0;
    var pregunta = questions[index];
    if (pregunta) {
        if (pregunta.correct_answer == respuesta) {
            localStorage.setItem("suma_preguntas_correctas", (parseInt(suma_preguntas_correctas) + 1))
        }
        document.getElementById("question_index").innerText = (index + 1);
        localStorage.setItem('contador', (index + 1));
        if (parseInt(localStorage.getItem("contador")) === questions.length) {
            questionsContainer.remove()
            document.getElementById("contenedorTotal").style.display = "block";
            document.getElementById("answerQuestionsCount").innerText = "El total de aciertos es de " + (localStorage.getItem("suma_preguntas_correctas") ? localStorage.getItem("suma_preguntas_correctas") : 0) + " de " + questions.length;
        } else {
            cambiarPregunta(index + 1);
        }
    }
}


function cambiarPregunta(index) {
    let currentQuestions = questions[index];
    document.getElementById("questionName").innerText = currentQuestions.question;
    if (currentQuestions.type === "boolean") {
        document.getElementById("1").innerText = "True";
        document.getElementById("2").innerText = "False";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
    } else {
        document.getElementById("1").style.display = "Block";
        document.getElementById("2").style.display = "Block";
        document.getElementById("3").style.display = "Block";
        document.getElementById("4").style.display = "Block";
        currentQuestions.incorrect_answers.push(currentQuestions.correct_answer)
        for (let i = 0; i <= 3; i++) {
            document.getElementById((i + 1)).innerText = currentQuestions.incorrect_answers[i];
        }
    }
}

triviaForm.addEventListener("submit", getApiData);
