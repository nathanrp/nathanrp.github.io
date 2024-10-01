$(document).ready(function(){

  $('.link-preview').miniPreview({
    width: 200,
    height: 114
  });

  $('.link-preview').hover(
    function(){
      var x = Math.ceil(Math.random() * 7) * (Math.round(Math.random()) ? 1 : -1)
      $(this).find('.mini-preview-wrapper').css(
        'transform', 'rotate('+x+'deg)'
      )
    }, function(){
      $(this).find('.mini-preview-wrapper').css(
        'transform','rotate(-3deg) scale(.1)'
      )
    });

  $('.link-preview').on('mousemove',function(e){
    $('.mini-preview-wrapper').css({
      left: e.clientX + 16,
      top: e.clientY + 16
    });
  });

});