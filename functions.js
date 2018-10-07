/* 			<=== Variables ===> */
// Tipo de pregunta en funcion de su posicion
var tipoPregunta = [
	'radio',
	'radio',
	'string'
];

var intentosPreguntas = [];

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


function resetearPregunta(pregunta) {
	interruptorBloqueoPreguntas(pregunta, false);

	// Esto es para ocultar si es correcta o no
	// var respuestaRadio = document.getElementsByClassName("correctOrNot question-"+pregunta);
	// changeVisibity(respuestaRadio, false);

}

function validar(pregunta) {
	// Sumamos el intento a la pregunta
	var posicionPregunta = pregunta - 1;

	if (tipoPregunta[posicionPregunta] === undefined) {
		alert("La pregunta que intentas responder no existe");
		return false;
	}

	sumarIntento(pregunta);

	// cogia el valor (value) de la pregunta (radio/string)
	var respuestaUsuario = respuestaPregunta(posicionPregunta);
	var respuestaCorrecta = respuestas[posicionPregunta];

	if (respuestaCorrecta === null) {
		// mostrar text-area oculto
		var respuestaTextArea = document.getElementsByClassName("correctOrNot question-"+pregunta);
		changeVisibity(respuestaTextArea, true);
	} else {
		if (respuestaUsuario == respuestaCorrecta) {
			// poner en verde
		} else {
			// poner en rojo
		}
		// mostrar si es o no correcto

		var respuestaRadio = document.getElementsByClassName("correctOrNot question-"+pregunta+" answer-"+respuestaUsuario);
		changeVisibity(respuestaRadio, true);
		interruptorBloqueoPreguntas(pregunta, true);
	}
		
}

function changeVisibity(elements, visibility) {
	var display = 'none';
	if (visibility == true) {
		display = 'block';
	}
	
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = display;
	}
 }


// se dedica a bloquear o desbloquear los input de las preguntas en funcion de lo que queramos
function interruptorBloqueoPreguntas(pregunta, disabled) {
	var opcionesPregunta = document.getElementsByName('question' + pregunta);
	for (var i = 0; i < opcionesPregunta.length; i++) {
		opcionesPregunta[i].disabled = disabled;
	}
	// busca el boton de validar (y su posicion dentro de la array) y lo des/bloqueamos
	document.getElementsByName('validar-' + pregunta)[0].disabled = disabled;
}

function preguntaSumaIntentos(posicionPregunta) {
	if (tipoPregunta[posicionPregunta] === "string") {
		return false;
	}

	return true;
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

function sumarIntento(pregunta) {
	var posicionPregunta = pregunta - 1;

	if (preguntaSumaIntentos(posicionPregunta)) {
		intentosPreguntas[posicionPregunta]++;
		document.getElementById('intentos-'+pregunta).innerHTML=intentosPreguntas[posicionPregunta];
		document.getElementById('intentos-totales').innerHTML=sumaIntentosTotales();
	}
}

function sumaIntentosTotales() {
	var totalNumeros = 0;
	for (i = 0; i < intentosPreguntas.length; i++) {
		totalNumeros += intentosPreguntas[i];
	}

	return totalNumeros;
}