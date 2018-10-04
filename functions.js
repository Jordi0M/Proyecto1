/* 			<=== Variables ===> */
global contadorPregunta1 = 1;
global contadorPregunta2 = 1
global contadorPreguntasTotales = 1;

/* 			<=== FUNCIONES ===> */
function getButtonId() {
	//pilla el id del botón, devuelve un valor sí o sí
}

function contador() {
	//id = getButtonId();
	id = 0;
	document.getElementsByClassName('contador')[id].getText = 
		document.getElementsByClassName('contador')[id].getText + contadorPregunta1;
	contadorPregunta1+=1;
}

function refresh1(){
	document.getElementById('p1').style.backgroundColor = '#ffffff';
	document.getElementById('p2').style.backgroundColor = '#ffffff';
	document.getElementById('p3').style.backgroundColor = '#ffffff';

}

function refresh2(){
	document.getElementById('p4').style.backgroundColor = '#ffffff';
	document.getElementById('p5').style.backgroundColor = '#ffffff';
}

function refresh3(){
	document.getElementById('respuestaVerdadera').hidden = true;
	document.getElementById('oculto6').style.display = 'none';
	document.getElementById('oculto7').style.display = 'none';
}

function validar1(){
	if(document.getElementById('primero').checked) {
		document.getElementById('oculto1').style.display = 'block';
		document.getElementById('p1').style.backgroundColor = '#81F781';// <--- Esto es para que se muestre la <p> de color verde

	}
	if(document.getElementById('segundo').checked) {
		document.getElementById('oculto2').style.display = 'block';
		document.getElementById('p2').style.backgroundColor = '#FA5858';// <--- Esto es para que se muestre la <p> de color rojo
	}
	if(document.getElementById('tercero').checked) {
		document.getElementById('oculto3').style.display = 'block';
		document.getElementById('p3').style.backgroundColor = '#FA5858';// <--- Esto es para que se muestre la <p> de color rojo
	}
	document.getElementById('primero').disabled = true;
	document.getElementById('segundo').disabled = true;
	document.getElementById('tercero').disabled = true;

}

function validar2(){
	if(document.getElementById('cuarto').checked) {
		document.getElementById('oculto4').style.display = 'block';
		document.getElementById('p4').style.backgroundColor = '#FA5858';// <--- Esto es para que se muestre la <p> de color rojo

	}
	if(document.getElementById('quinto').checked) {
		document.getElementById('oculto5').style.display = 'block';
		document.getElementById('p5').style.backgroundColor = '#81F781';// <--- Esto es para que se muestre la <p> de color verde
	}
	document.getElementById('cuarto').disabled = true;
	document.getElementById('quinto').disabled = true;
}

function validar3(){
	document.getElementById('respuestaVerdadera').hidden = false;
}