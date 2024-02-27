import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// global variables

var startTime;
var isRunning = false;


// render react app

ReactDOM.render(<App />, document.getElementById("root"));


// functions

function start () {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime();
        update();
    }
}

function stop () {
    isRunning = false;
}

function update () {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;

    var ms = elapsedTime % 1000;
    var seconds = Math.floor(elapsedTime / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;
    minutes %= 60;


    // Formate os valores se desejar (adicionando zeros à esquerda)
    minutes = formatarNumero(minutes);
    seconds = formatarNumero(seconds);
    ms = formatarNumero(ms);

    document.querySelector('.time-div h1').innerHTML =  minutes + ":" + seconds + ":" + ms;

    if (isRunning) {
        setTimeout(update, 100);
    }
}

function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
}

document.addEventListener('keydown', function (e) {
    if (e.key === ' ') {
        start();
    } else {
        stop();
    }
});