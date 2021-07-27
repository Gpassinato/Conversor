//Declaracao das variaveis dos botoes e das medidas
var converter = document.querySelector(".converter"),
    inverter = document.querySelector(".coppy"),
    med1 = document.querySelector("#fromconverter"),
    med2 = document.querySelector("#toconverter");
         
//function de calculo e revelar o resultado
    function calculation(){
    
        var va1 = document.querySelector("#va1").value,
        va2 = document.querySelector("#va2").value;
        
        console.log("A 1º unidade de medida selecionado foi: " + med1.options[med1.selectedIndex].value);
        console.log("A 2º unidade de medida selecionado foi: " + med2.options[med2.selectedIndex].value);
        
        console.log("O 1° valor inserido foi: " + va1);
        console.log("O 2º valor inserido foi: " + va2);

    
        if(med1.options[med1.selectedIndex].value === "km"){
            if(med2.options[med2.selectedIndex].value === "m"){
                va2 = va1 * 1000;
            }else if( med2.options[med2.selectedIndex].value === "cm"){
                va2 = va1 * 100000;
            };

        };           
            
        if(med1.options[med1.selectedIndex].value === "m"){
            if(med2.options[med2.selectedIndex].value === "km"){
                va2 = va1 / 1000;
                
            }else if( med2.options[med2.selectedIndex].value === "cm"){
                va2 = va1 * 100;
 
            };       
        };   
    
        if(med1.options[med1.selectedIndex].value === "cm"){
            if(med2.options[med2.selectedIndex].value === "km"){
                va2 = va1 / 100000;
 
            }else if( med2.options[med2.selectedIndex].value === "m"){
                va2 = va1 / 100;

            };
                    
        };  
        
        
        if(med1.options[med1.selectedIndex].value === med2.options[med2.selectedIndex].value){
            console.log("Mesma unidade de medida"); 
            va2 = va1;
        }
        
        //Display dos resutados
        console.log("O resultado foi: " + va2);
        document.querySelector("#va2").value = +va2;
        
};



//function de copia do resultado para o clipBord
function inv(){
       
    va2.select();
    document.execCommand("copy");
      
    console.log("O valor copaido foi: " + va2.value);
    inverter.textContent = "Copiado";

    setTimeout( function copiado (){inverter.textContent = "Copiar";}, 2000);
}

//Listener dos botoes
converter.addEventListener('click', calculation);       
inverter.addEventListener('click',inv);
