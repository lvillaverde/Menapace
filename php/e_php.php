<?php
//Contact form by ElNicko077 - elnicko077.com 
	$mensaje = $_POST['mensaje'];
  $mensaje.= "\n--------------\n";
	$mensaje.= "\n Mensaje envíado por: \n";
  $mensaje.= "\nNombre: ". $_POST['nombre'];	
  $mensaje.= "\nApellido Paterno: ". $_POST['apellidoP'];  
  $mensaje.= "\nApellido Materno: ". $_POST['apellidoM'];  
  $mensaje.= "\nFecha de nacimiento: ". $_POST['nacimientoDia'];
  $mensaje.= " - ". $_POST['nacimientoMes'];
  $mensaje.= " - ". $_POST['nacimientoAnio'];
  $mensaje.= "\nTeléfono: ". $_POST['telefono'];
	$mensaje.= "\nE-mail: ".$_POST['email'];
    //-----------------------------   
  	$destino= "jcmenapace@gmail.com";
  	$remitente = $_POST['email'];
  	$asunto = "Solicitud de ingreso al árbol genealógico de: ".$_POST['nombre'];
  	mail($destino,$asunto,$mensaje,"FROM: $remitente");

  	echo "Su mensaje ha sido enviado correctamente.";
?>