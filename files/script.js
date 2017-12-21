function titolo(id) {
    $.get("film/"+id+"/titolo.txt", function(data) {
        return data;
    });
}

function apri(pagina, timeout=1) {
    $.get(pagina+".html", function(data){
        setTimeout(function() {
            $('.overlay').append(data);
        }, timeout);
    });
}

function mostra_popup() {
    setTimeout(function(){
        $('.popup').css("opacity", "1");
    },100);
}

function chiudi_popup(overlay=false) {
    $('.popup').css("opacity","0");
    setTimeout(function() {
        $('.overlay').html('');
        crea_link_chiusura();
    }, 400);
    if(overlay) chiudi_overlay(100);
}

function crea_overlay() {
    $('body').css('overflow','hidden');
    $('body').append('<div class="overlay"></div>');
    setTimeout(function(){
        $('.overlay').css("background-color", "rgba(0,0,0,0.7)");
    },10);
    crea_link_chiusura();
    localStorage.ora = null;
    localStorage.giorno = null;
    localStorage.prenotazione = null;
}

function chiudi_overlay(timeout=1) {
    setTimeout(function() {
        $('.overlay').css("opacity","0");
        setTimeout(function() {
            $('.overlay').remove();
        }, 400);
    }, timeout);
    $('body').css("overflow", "auto");
}

function crea_link_chiusura() {
    $('.overlay').html('<a class="chiudi_overlay"></a>');
    $('.overlay a').bind("click", function() {
        $('#pannello').css("left", "100vw");
        chiudi_overlay(50);
    });
}

function panel(what) {
    crea_overlay();
    $.get("cinema.html",function(data) {
        $('.overlay').append(data);
        setTimeout(function() {
            $('.'+what).addClass("open");
            $('#pannello').css("left", "70vw");
        }, 50);
    });
}

function flow_animate(emoji) {
    num_emoji=50;
    for(i=0;i<=num_emoji;i++) {
        fs = Math.random()*100;
        lp = Math.random()*100;
        span='<b class="emoji" style="left:'+lp+'%;font-size:'+fs+'px;" id="emoji-'+i+'">'+emoji+"</b>";
        $('.overlay').append(span);
    }
    j=0;
    setInterval(function(){
        if(j<=num_emoji) {
            $('#emoji-'+j).css("top","-200px");
        }
        j++;
    },(10+Math.random()*20));
}