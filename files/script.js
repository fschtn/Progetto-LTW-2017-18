function mostra_popup() {
    setTimeout(function(){
        $('.popup').css("opacity", "1");
    },100);
}

function apri(pagina, timeout=1) {
    $.get(pagina+".html", function(data){
        setTimeout(function() {
            $('.overlay').append(data);
        }, timeout);
    });
}

function crea_overlay() {
    $('body').css('overflow','hidden');
    $('body').append('<div class="overlay"></div>');
    setTimeout(function(){
        $('.overlay').css("background-color", "rgba(0,0,0,0.7)");
    },10);
    localStorage.ora = null;
    localStorage.giorno = null;
    localStorage.prenotazione = null;
}

function titolo(id) {
    $.get("film/"+id+"/titolo.txt", function(data) {
        return data;
    });
}

function chiudi_popup(overlay=false) {
    $('.popup').css("opacity","0");
    setTimeout(function() {
        $('.overlay').html("");
    }, 400);
    if(overlay) chiudi_overlay(100);
}

function chiudi_overlay(to) {
    timeout = to != null ? to : 1;
    setTimeout(function() {
        $('.overlay').css("opacity","0");
        setTimeout(function() {
            $('.overlay').remove();
        }, 400);
    }, to);
    $('body').css("overflow", "auto");
}