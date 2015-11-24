$(document).ready( function(){
        
        var cantPhotos = $(".gallery-photo").size();  //CUENTA DINAMICAMENTE LA CANTIDAD DE FOTOS
        
        var numActualPhoto;
    
        $(".gallery-photo").on('click', function(){
            
                var foto = $(this).attr('src');
                numActualPhoto = $(this).attr('alt');
            
                $("#img-gallery img").attr('src', foto);    
                
                
                $("#content-gallery-open").fadeIn(0);
                $("nav").fadeOut(0);
                
        });
    
        $(".btn-exit-gallery").on('click', closeGallery);
        
        $(document).bind('keydown',function(e){
                    if ( e.which == 27 ){ //BTN ESC
                        closeGallery()
                    };
                    if(e.which == 39 ){ //BTN FLECHA DERECHA
                        nextPhoto();
                    };
                    if(e.which == 37 ){ //BTN FLECHA IZQUIERDA
                        lastPhoto();
                    };
        });
    
        function closeGallery(){
            
                $("#img-gallery img").attr('src', "");    
            
                $("#content-gallery-open").fadeOut(0);
                $("nav").fadeIn(0);
        }
    
        $("#arrow-content img").on('click', function(){
                if($(this).attr('alt')=='next'){
                    nextPhoto();
                }else{
                    lastPhoto();    
                }
        });
    
        function nextPhoto(){
            
            numActualPhoto++;
            
            if(numActualPhoto>=cantPhotos){
                numActualPhoto=1;
            }
            
            $("#img-gallery img").attr('src', "imagenes/galeria/"+numActualPhoto+".jpg"); 
              
        }
    
        function lastPhoto(){
            
            numActualPhoto--;
            
            if(numActualPhoto<=0){
                numActualPhoto=cantPhotos;
            }
            
            $("#img-gallery img").attr('src', "imagenes/galeria/"+numActualPhoto+".jpg"); 
              
        }
    
        
    
});
    

    
