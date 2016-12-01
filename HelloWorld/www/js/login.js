$(document).ready(function(){

    $("#btnLogin").click(function{

        $.post(
            'login.php', 
            {
                login : $("#username").val(),  
                password : $("#password").val()
            },

            function(data){

                if(data == 'Success'){

                     alert("GG");
                }
                else{

                     alert("Error login");
                }
        
            },

            
         );

    });

});