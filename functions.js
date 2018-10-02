function myFunction(){
	document.getElementById('oculto1').style.display = 'none';
	document.getElementById('oculto2').style.display = 'none';
	document.getElementById('oculto3').style.display = 'none';
    document.getElementById("myForm").reset();
}

function myFunction2(){
	document.getElementById('oculto4').style.display = 'none';
	document.getElementById('oculto5').style.display = 'none';
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
}

function mostrar2(){
	if(document.getElementById('cuarto').checked) {
	document.getElementById('oculto4').style.display = 'block';
	}
	if(document.getElementById('quinto').checked) {
	document.getElementById('oculto5').style.display = 'block';
	}
}

