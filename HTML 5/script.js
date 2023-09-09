let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinar() {
    let inputNumero = document.getElementById("numero");
    let resultado = document.getElementById("resultado");

    let intento = parseInt(inputNumero.value);

    if (isNaN(intento) || intento < 1 || intento > 100) {
        resultado.textContent = "Ingresa un número válido entre 1 y 100.";
        return;
    }

    intentos++;

    if (intento === numeroAleatorio) {
        resultado.textContent = `¡Correcto! Adivinaste en ${intentos} intentos.`;
    } else if (intento < numeroAleatorio) {
        resultado.textContent = "Demasiado bajo. Intenta de nuevo.";
    } else {
        resultado.textContent = "Demasiado alto. Intenta de nuevo.";
    }

    inputNumero.value = "";

function reiniciar() {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        intentos = 0;
        document.getElementById("resultado").textContent = "";
    }

function adivinar() {
        let inputNumero = document.getElementById("numero");
        let resultado = document.getElementById("resultado");
        let intentosDisplay = document.getElementById("intentos");
    
        let intento = parseInt(inputNumero.value);
    
        // ...
    
        intentos++;
    
        // ...
    
        intentosDisplay.textContent = intentos;
    }
let nivel = 1;

    function adivinar() {
        // ...
    
        if (intento === numeroAleatorio) {
            resultado.textContent = `¡Correcto! Adivinaste en ${intentos} intentos.`;
            nivel++;
            reiniciar();
            intentosDisplay.textContent = intentos;
            document.getElementById("nivel").textContent = nivel;
        }
    
        // ...
    }
    
    function reiniciar() {
        numeroAleatorio = Math.floor(Math.random() * (nivel * 10)) + 1;
        intentos = 0;
        document.getElementById("resultado").textContent = "";
    }
          
}
