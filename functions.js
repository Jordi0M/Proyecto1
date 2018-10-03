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
    document.getElementById("myForm").reset();
}

function myFunction2(){
	document.getElementById('oculto4').style.display = 'none';
	document.getElementById('oculto5').style.display = 'none';
	document.getElementById('cuarto').disabled = false;
	document.getElementById('quinto').disabled = false;
	document.getElementById("myForm").reset();
}

function mostrar(){
	if(document.getElementById('primero').checked) {
	document.getElementById('oculto1').style.display = 'block';
	}
	if(document.getElementById('segundo').checked) {
	document.getElementById('oculto2').style.display = 'block';
	}
	if(document.getElementById('tercero').checked) {
	document.getElementById('oculto3').style.display = 'block';
	}
	document.getElementById('primero').disabled = true;
	document.getElementById('segundo').disabled = true;
	document.getElementById('tercero').disabled = true;

}

function mostrar2(){
	if(document.getElementById('cuarto').checked) {
	document.getElementById('oculto4').style.display = 'block';
	}
	if(document.getElementById('quinto').checked) {
	document.getElementById('oculto5').style.display = 'block';
	}
	document.getElementById('cuarto').disabled = true;
	document.getElementById('quinto').disabled = true;
}
