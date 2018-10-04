function contador() {
	counter = 0;
	document.getElementsByClassName('contador1').innerHTML =document.getElementsByClassName('contador1').innerHTML + counter;
	counter+=1;
}

function myFunction(){
	
	document.getElementById('oculto1').style.display = 'none';
	document.getElementById('oculto2').style.display = 'none';
	document.getElementById('oculto3').style.display = 'none';
	document.getElementById('primero').disabled = false;
	document.getElementById('segundo').disabled = false;
	document.getElementById('tercero').disabled = false;
	document.getElementById('p1').style.backgroundColor = '#ffffff';
	document.getElementById('p2').style.backgroundColor = '#ffffff';
	document.getElementById('p3').style.backgroundColor = '#ffffff';
    document.getElementById("myForm").reset();
}

function myFunction2(){
	document.getElementById('oculto4').style.display = 'none';
	document.getElementById('oculto5').style.display = 'none';
	document.getElementById('cuarto').disabled = false;
	document.getElementById('quinto').disabled = false;
	document.getElementById('p4').style.backgroundColor = '#ffffff';
	document.getElementById('p5').style.backgroundColor = '#ffffff';
	document.getElementById("myForm2").reset();
}

function myFunction3(){
	document.getElementById('respuestaVerdadera').hidden = true;
	document.getElementById('oculto6').style.display = 'none';
	document.getElementById('oculto7').style.display = 'none';
	document.getElementById("myForm3").reset();
}

function mostrar(){
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

function mostrar2(){
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

function mostrar3(){
	document.getElementById('respuestaVerdadera').hidden = false;
	/*Esto no funciona*/
	/*
	var pass1 = document.getElementById("respuesta").value;
	var pass2 = document.getElementById("respuestaVerdadera").value;
	if (pass1.innerHTML == pass2.innerHTML){
		document.getElementById('oculto6').style.display = 'block';
	}
	else{
		document.getElementById('oculto7').style.display = 'block';
	}
	*/
}