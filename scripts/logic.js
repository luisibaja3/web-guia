$(document).ready( function(){

	
    //alert("Estoy en JQuery!");
    
/* ***Código para el slide de fotos*** */
	
	//variables
	var direccion;
    
    //vector que contiene las posiciones de las fotos segun el id de estas del HTML
	var pos = [1,2,3,4];
	
	$(".arrow").click(function(){
        
        //alert("Diste click a arrow!");
        
		direccion =	$(this).attr("alt");
	
        //alert(direccion);
        
        //Acciones al presionar la flecha a la izquierda
        
		if(direccion=="left"){
            
            $("#slide-img-"+pos[0]+ " " ).css("margin-left", "200%");
            $("#slide-img-"+pos[0]+"").hide();
			
			$("#slide-img-"+pos[1]+"").css("margin-left", "-100%");
			$("#slide-img-"+pos[2]+"").css("margin-left", "0%");

            $("#slide-img-"+pos[3]+"").css("margin-left", "100%");
            $("#slide-img-"+pos[3]+"").show();
            
            //Sumamos una posicion a cada posicion del array de las fotos
            
            for(var i = 0; i<= 3; i++){

                    pos[i]+=1;

                //Si la posicion sobrepasa el valor de 4 pasa a ser 1
                    if(pos[i]>=5){
                        pos[i]=1;
                    }
                }
			
            //Acciones al presionar la flecha a la derecha
		}else if(direccion=="right"){
            
            $("#slide-img-"+pos[0]+"").css("margin-left", "0%");
			
			$("#slide-img-"+pos[1]+"").css("margin-left", "100%");
			
			$("#slide-img-"+pos[2]+"").css("margin-left", "-200%");
			$("#slide-img-"+pos[2]+"").hide();

            $("#slide-img-"+pos[3]+"").css("margin-left", "-100%");
            $("#slide-img-"+pos[3]+"").show();
           
            //Restamos una posicion a cada posicion del array de las fotos
            for(var i = 0; i<= 3; i++){

                pos[i]-=1;

            //Si la posicion es menor a 1 pasa a ser 4
                if(pos[i]<=0){    
                    pos[i]=4;
                }
            }   
        }
        
	});
    
    	   
//****Código para la calculadora****//

//variables
	var entrada;
	var resultado;
	
	//Se toman los datos de las teclas y se imprimen en la pantalla
	
	$(".keys .num").click(function(){
		
		entrada = $(this).text();
		
		$(".screen").append(entrada);
		
	});
	
	//Se limpia la pantalla
	
	$(".clear").click(function(){
		
		$(".screen").text("");
		
	});
	
	//Se calcula lo que está en la pantalla y se muestra
	
	$(".eval").click(function(){
		
		resultado = eval($(".screen").text());
		
		$(".screen").text(resultado);
		
	});
    

});
