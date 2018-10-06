/* 			<=== Variables ===> */
// Tipo de pregunta en funcion de su posicion
var tipoPregunta = [
	'radio',
	'radio',
	'string'
];

var intentosPreguntas = [];
var intentosPreguntasTotal = 0;

// Valor correcto del option/input
var respuestas = [
	1,
	2,
	null
];

/* 			<=== INICIAMOS LA APLICACION ===> */
init();


/* 			<=== FUNCIONES ===> */
function init() {
	// Rellenamos los intentos de preguntas que no sean de string
	for (var n = 0; n < tipoPregunta.length; n++) {
		if (preguntaSumaIntentos(n)) {
			intentosPreguntas[n] = 0;
		}
	}
}

function getButtonId() {
	//pilla el id del botón, devuelve un valor sí o sí
}

function contador() {
	//id = getButtonId();
	id = 0;
	document.getElementsByClassName('contador')[id].getText =
		document.getElementsByClassName('contador')[id].getText + contadorPregunta1;
	contadorPregunta1 += 1;
}

function refresh1() {
	document.getElementById('p1').style.backgroundColor = ' #ff5733';
	document.getElementById('p2').style.backgroundColor = ' #ff5733';
	document.getElementById('p3').style.backgroundColor = ' #ff5733';

}

function refresh2() {
	document.getElementById('p4').style.backgroundColor = ' #ff5733';
	document.getElementById('p5').style.backgroundColor = ' #ff5733';
}

function refresh3() {
	document.getElementById('respuestaVerdadera').hidden = true;
	document.getElementById('oculto6').style.display = 'none';
	document.getElementById('oculto7').style.display = 'none';
}

function validar(pregunta) {
	// Sumamos el intento a la pregunta
	var posicionPregunta = pregunta - 1;

	if (tipoPregunta[posicionPregunta] === undefined) {
		alert("La pregunta que intentas responder no existe");
		return false;
	}

	if (preguntaSumaIntentos(pregunta)) {
		intentosPreguntas[posicionPregunta]++;
	}

	// cogia el valor (value) de la pregunta (radio/string)
	var respuestaUsuario = respuestaPregunta(posicionPregunta);
	var respuestaCorrecta = respuestas[posicionPregunta];

	if (respuestaCorrecta === null) {
		// mostrar text-area oculto
	} else {
		if (respuestaUsuario == respuestaCorrecta) {
			// poner en verde
		} else {
			// poner en rojo
		}
		// mostrar si es o no correcto
		interruptorBloqueoPreguntas(pregunta, true);
	}



	// document.getElementById('oculto4').style.visibility = 'visible';
}

// se dedica a bloquear o desbloquear los input de las preguntas
function interruptorBloqueoPreguntas(pregunta, disabled) {
	if (disabled === undefined) {
		disabled = false;
	}

	var opcionesPregunta = document.getElementsByName('question' + pregunta);
	for (var i = 0; i < opcionesPregunta.length; i++) {
		opcionesPregunta[i].disabled = disabled;
	}
}

function preguntaSumaIntentos(posicionPregunta) {
	if (tipoPregunta[posicionPregunta] === "string") {
		return false;
	}

	return true;
}

function validar1() {
	if (document.getElementById('primero').checked) {
		document.getElementById('oculto1').style.display = 'block';
		document.getElementById('p1').style.backgroundColor = '#81F781';// <--- Esto es para que se muestre la <p> de color verde

	}
	document.getElementById('primero').disabled = true;
}


function respuestaPregunta(posicionPregunta) {
	var respuesta = null;
	// numeroPregunta es el numero de la array, hay que sumarle uno para estar con el codigo
	var numeroPregunta = posicionPregunta + 1;
	// buscamos el elemento con nombre question y concatenamos el numero
	// nos va a dar el numero total de inputs que hayan en la pregunta
	var opcionesPregunta = document.getElementsByName('question' + numeroPregunta);

	// Nos aseguramos que sea radio button
	if (tipoPregunta[posicionPregunta] === "radio") {
		// Iniciamos un bucle que tenga el numero de respuestas
		for (var i = 0; i < opcionesPregunta.length && respuesta === null; i++) {
			if (opcionesPregunta[i].checked) {
				// guardamos el valor del radio-botón en respuesta
				respuesta = opcionesPregunta[i].value;

				// respuesta hará tmb de condicion de salida del bucle
			}
		}		
	} else {
		// si no es radio directamente le pasamos el texto del text-area
		respuesta = opcionesPregunta[0].value;
	}
	
	return respuesta;
}