/*JAVASCRIPT DELLO SLIDER E DEL FILTRO PER CATEGORIE*/

/*da effettuare onload del body, assegna l'event handler oninput allo slider e onclick all'elemento radio*/
function assegnaEventHandler()
{
    var output = document.getElementById("demo");      /* il prezzo che verra visualizzato nel filtro per prezzo*/
    var contenitore=document.getElementById("contenitore"); /*prendo il contenitore che contiene tutte le card*/
    var output2 = document.getElementById("demo2"); 

    /*prendo le card del documento e le inserisco in un array in modo che possa recuperarle anche dopo averle rimosse dal DOM!*/
    var cards=document.getElementsByClassName("card"); /*array delle card*/
    var arrayCards=[]; /*inizializzo l'array di carte che devono essere visualizzate */
    var indices = []; 

    var divArray = [];
    divArray[0] = document.getElementById("divLibri");
    divArray[1] = document.getElementById("divTutorial");
    divArray[2] = document.getElementById("divCorsi");
    

    var prezzomax=0; /*imposto il prezzo massimo iniziale a zero*/
    for (var i=0;i<cards.length;i++) /*scorro tutte le carte*/
    {          
        indices[i] = 1; 
        /*Math.ceil ritorna Il più piccolo intero maggiore o uguale al numero passato come parametro.*/
        var prezzoAttuale=parseInt(Math.ceil(cards[i].getElementsByClassName("prezzo")[0].innerHTML));
        /*prezzoAttuale = piu piccolo numero intero maggiore o uguale al prezzo della carta attuale*/

        
        if (prezzoAttuale > prezzomax) prezzomax=prezzoAttuale;   /*se il prezzo calcolato è maggiore di quello attualmente visualizzato, cambio il prezzo visualizzato*/
        
        arrayCards[i]=cards[i];
        arrayCards[i].accettabilePrezzo=true;
        arrayCards[i].accettabileTipo=true;
    }

    
    //document.getElementById("costo").setAttribute("max",prezzomax);   //inserisco il prezzo massimo come attributo "max" dello slider
    //document.getElementById("costo").setAttribute("value",prezzomax); //inserisco il prezzo massimo come attributo "value" dello slider
    //output.innerHTML = 120 +"€"; //Printa valore iniziale dello slider onload del body
    output2.innerHTML = 11;
    $('input[type=radio][name="costo"]').change(function() {
        var costo1 = this.value;
        if (costo1 == "max") {
            contenitore.removeChild(divArray[0]);
            contenitore.removeChild(divArray[1]);
            contenitore.removeChild(divArray[2]);
            for (var i = 0; i < indices.length; i++) {
                if (indices[i] == 1) {
                    indices[i] = 0;
                    contenitore.removeChild(arrayCards[i]);
                }
            }
            for (var i = 0; i < arrayCards.length; i++) {
                if (i==0){
                    contenitore.appendChild(divArray[0]);
                }
                else if (i==4){
                    contenitore.appendChild(divArray[1]);
                }
                else if (i == 7){
                    contenitore.appendChild(divArray[2]);
                }
                contenitore.appendChild(arrayCards[i]);
                indices[i] = 1;
            }
        }
        else{
            costo1 = Math.ceil(parseFloat(costo1));
            var costo2;
            if (costo1 == 0) {
                costo2 = 0;
            }
            else if (costo1 == 1) {
                costo2 = 30;
            }
            else if (costo1 == 31) {
                costo2 = 60;
            }
            else if (costo1 == 61) {
                costo2 = 90;
            }
            else {
                costo2 = 9999;
            }
            for (var i = 0; i < arrayCards.length; i++) {
                var prezzo = Math.ceil(parseFloat(arrayCards[i].getElementsByClassName("prezzo")[0].innerHTML)); //prezzo card
                if ((prezzo < costo1 || prezzo > costo2) && (!(document.getElementById("card" + i) == null))) {
                    contenitore.removeChild(arrayCards[i]);  //rimuovi card
                    indices[i] = 0;
                    arrayCards[i].accettabilePrezzo = false;
                }

                else if (prezzo >= costo1 && prezzo <= costo2 && (document.getElementById("card" + i) == null) && arrayCards[i].accettabileTipo == true) {
                    contenitore.appendChild(arrayCards[i]);  //aggiungi card
                    indices[i] = 1;
                    arrayCards[i].accettabilePrezzo = true;
                }
                else if (prezzo < costo1 || prezzo > costo2) {
                    arrayCards[i].accettabilePrezzo = false;
                }
                else {
                    arrayCards[i].accettabilePrezzo = true;
                }
            }
        }
        output2.innerHTML = document.getElementsByClassName("card").length;
    });
}
