//Contact form by ElNicko077 - elnicko077.com 
function cargaSendMail(){

    $("#c_enviar").attr("disabled", true);

    $(".c_error").remove();

    var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var s_email = $('#c_mail').val();
    var s_name = $('#c_name').val();
    var s_nameAP = $('#c_nameAP').val();
    var s_nameAM = $('#c_nameAM').val();     
    var s_birthdate = $('#c_birthdate').val();
    var s_birthdateDay = $('#c_birthdateDay').val();
    var s_birthdateMonth = $('#c_birthdateMonth').val();  
    var s_birthdateYear = $('#c_birthdateYear').val();       
    var s_msg = $('#c_msg').val(); 
    var s_tel = $('#c_tel').val();

    if (filter.test(s_email)){
    sendMail = "true";
    } else{
    $('#c_mail').after("<span class='c_error' id='c_error_mail'></span>");
    sendMail = "flase";
    }
    if (s_name.length == 0 ){
    $('#c_name').after( "<span class='c_error' id='c_error_name'></span>" );
    var sendMail = "flase";
    }
    if (s_name.length == 0 ){
    $('#c_nameAP').after( "<span class='c_error' id='c_error_name'></span>" );
    var sendMail = "flase";
    }
    if (s_name.length == 0 ){
    $('#c_nameAM').after( "<span class='c_error' id='c_error_name'></span>" );
    var sendMail = "flase";
    }    
    if (s_name.length == 0 ){
    $('#c_birthdate').after( "<span class='c_error' id='c_error_name'></span>" );
    var sendMail = "flase";
    }
    if (s_msg.length == 0 ){
    $('#c_msg').after( "<span class='c_error' id='c_error_msg'></span>" );
    var sendMail = "flase";
    }

    if (s_tel.length == 0 ){
    $('#c_tel').after( "<span class='c_error' id='c_error_msg'></span>" );
    var sendMail = "flase";
    }
   
    if(sendMail == "true"){
     var datos = {

             "nombre" : $('#c_name').val(),

             "apellidoP" : $('#c_nameAP').val(),

             "apellidoM" : $('#c_nameAM').val(),

             "email" : $('#c_mail').val(),

             "nacimiento" : $('#c_birthdate').val(),

             "nacimientoDia" : $('#c_birthdateDay').val(),

             "nacimientoMes" : $('#c_birthdateMonth').val(),

             "nacimientoAnio" : $('#c_birthdateYear').val(),

             "telefono" : $('#c_tel').val(),

             "mensaje" : $('#c_msg').val()

     };

     $.ajax({

             data:  datos,

             url:   'php/e_php.php',

             type:  'post',

             beforeSend: function () {

                     $("#c_enviar").val("Enviado...");

             },

             success:  function (response) {

                    $('form')[0].reset();  
                    $("#c_enviar").val("Enviar");
                    $("#c_information p").html(response);
                    $("#c_information").fadeIn('slow');
                    $("#c_enviar").removeAttr("disabled");
                    


             }

     });

} else{
    $("#c_enviar").removeAttr("disabled");
}

}