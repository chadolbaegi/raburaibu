var image = new Array ();
  image[0] = "a.png";
  image[1] = "b.png";
  image[2] = "c.png";
  image[3] = "d.png";
  image[4] = "e.png";
  image[5] = "f.png";
  image[6] = "g.png";
  image[7] = "h.png";
  image[8] = "i.png";
  image[9] = "j.png";
  image[10] = "k.png";
  image[11] = "l.png";
  image[12] = "m.png";
  image[13] = "n.png";

  var size = image.length
  var x = Math.floor(size*Math.random())

  $('#topimg').css('background-image','url(' + image[x] + ')');

/**/

$('#topimg').click(function() {
  $('#links').fadeToggle(500);
  $('#searching').focus();
});

$('body').click(function(e){
       if( e.target.id == 'topimg' || e.target.id == '4ch' || e.target.id == 'social' || e.target.id == 'school' || e.target.id == 'searching' )
          { return true; }
       else
          { $('#links').fadeOut(); }

});

$(window).load(function(){
    $('#searching').focus();
    $('.up').on('click', function () {
        $(this).siblings('.sub').slideToggle(450);
    })
});

setTimeout(function() { 
$('#links').fadeToggle(500);
} , 1000);

