function apri_info(id) {
    $.get("informazioni.html", function(data){
        crea_overlay();
        $('body').css('overflow','hidden');
        $('.overlay').append(data);
        $('#informazioni > img').attr("src", "film/"+id+"/locandina.jpg");
        $('#informazioni .info h1').load("film/"+id+"/titolo.txt");
        $('#informazioni .info h2 .genere').load("film/"+id+"/genere.txt");
        $('#informazioni .info h2 .durata').load("film/"+id+"/durata.txt");
        $('#informazioni .info h2 .valutazione').load("film/"+id+"/valutazione.txt");
        $('#informazioni .info #trama').load("film/"+id+"/trama.txt");
    });
}

function crea_overlay() {
    $('body').append('<div class="overlay"></div>');
    setTimeout(function(){
        $('.overlay').css("background-color", "rgba(0,0,0,0.7)");
    },10);
}

function titolo(id) {
    $.get("film/"+id+"/titolo.txt", function(data) {
        return data;
    });
}

function chiudi_info(overlay) {
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