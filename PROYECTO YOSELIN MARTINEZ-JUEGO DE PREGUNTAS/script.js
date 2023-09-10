const questions = [
    {
        question: "¿En qué año se descubrió América?",
        options: ["1492", "1776", "1812", "1498"],
        correctAnswer: 0,
    },
    {
        question: "¿Quién fue el primer presidente de Estados Unidos?",
        options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
        correctAnswer: 1,
    },
    {
        question: "¿Cuál fue la primera dinastía de Egipto?",
        options: ["Ptolomeo", "Habsburgo", "Tudor", "Dinastía 0"],
        correctAnswer: 3,
    },
    {
        question: "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
        options: ["1776", "1789", "1801", "1820"],
        correctAnswer: 0,
    },
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Berlín", "Londres", "Madrid", "París"],
        correctAnswer: 3,
    },
    {
        question: "¿Quién fue el líder de la Revolución Rusa en 1917?",
        options: ["León Trotsky", "Nikolái Bujarin", "Aleksandr Kerenski", "Vladimir Lenin"],
        correctAnswer: 3,
    },
    {
        question: "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
        options: ["1776", "1789", "1801", "1820"],
        correctAnswer: 0,
    },
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Berlín", "Londres", "Madrid", "París"],
        correctAnswer: 3,
    },
    {
        question: "¿Quién fue el líder de la Revolución Rusa en 1917?",
        options: ["León Trotsky", "Nikolái Bujarin", "Aleksandr Kerenski", "Vladimir Lenin"],
        correctAnswer: 3,
    },
    {
        question: "¿Quién fue el primer emperador romano?",
        options: ["Julio César", "Augusto", "Nerón", "Tiberio"],
        correctAnswer: 1,
    },
    {
        question: "¿Cuál fue la batalla que marcó el final de la Segunda Guerra Mundial en Europa?",
        options: ["Batalla de Stalingrado", "Batalla de Normandía", "Batalla de Berlín", "Batalla de Midway"],
        correctAnswer: 2,
    },
    {
        question: "¿En qué año se produjo la Revolución Francesa?",
        options: ["1776", "1789", "1801", "1820"],
        correctAnswer: 1,
    },
    {
        question: "¿Quién fue el autor de 'Romeo y Julieta'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "George Orwell"],
        correctAnswer: 2,
    },
        
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultText = document.getElementById("result");
const nextButton = document.getElementById("next-button");


function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.disabled = true;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.textContent = currentQuestion.options[i];
        optionButton.className = "option";
        optionButton.onclick = () => checkAnswer(i);
        optionsContainer.appendChild(optionButton);
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        resultText.textContent = "¡Respuesta correcta!";
    } else {
        resultText.textContent = "Respuesta incorrecta";
    }

    nextButton.disabled = false;
    disableOptions();
}

function disableOptions() {
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach((button) => {
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    resultText.textContent = "";
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.disabled = true;
    } else {
        endGame();
    }
}

function endGame() {
    questionText.textContent = `Juego Terminado. Puntuación: ${score}/${questions.length}`;
    optionsContainer.innerHTML = "";
    nextButton.disabled = true;
}

startGame();
