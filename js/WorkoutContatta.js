function validateForm() {
    
    var nome = document.getElementById("nome").value
    var cognome = document.getElementById("cognome").value
    var nomeallenatore = document.getElementById("nomeallenatore")


    if(!nomeallenatore.selected && nome != "" && cognome != "")
    {
        alert("messaggio inviato con successo")
    }

    if(nomeallenatore.selected)
    {
        alert("devi selezionare un allenatore")
    }
    else{

    if (nome == "" && cognome == ""){
        alert("non hai inserito nome e cognome")
    }
    else if(nome == "")
        {
            alert("non hai inserito il nome")
        }
        else if(cognome == "") alert("non hai inserito il cognome")
    }
    
        
         
    return false;
}