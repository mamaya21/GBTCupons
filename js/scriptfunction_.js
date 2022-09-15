
function changeIdioma(val, globallenguage){

    if(val != globallenguage){
        if(val == "es")
            window.location.href = 'esp.html';
        else if(val == "en")
            window.location.href = 'index.html';
        else if(val == "por")
            window.location.href = 'por.html';
        else if(val == "in")
            window.location.href = 'in.html';
        else if(val == "th")
            window.location.href = 'th.html';
        else if(val == "sc")
            window.location.href = 'sc.html';
        else if(val == "tc")
            window.location.href = 'tc.html';
    }


    
}