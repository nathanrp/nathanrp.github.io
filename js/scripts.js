$(document).ready(function(){

  $('.link-preview').miniPreview({
    prefetch: 'none',
    width: 200,
    height: 114
  });

  $('.link-preview, .alt-preview').hover(
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

  $('.link-preview, .alt-preview').on('mousemove',function(e){
    $('.mini-preview-wrapper').css({
      left: e.clientX + 16,
      top: e.clientY + 16
    });
  });

  $('.multi-preview').hover(
    function(){
      $(this).find('.mini-preview-wrapper').each(function(i,e){
        var d = Math.ceil(Math.random() * 7) * (Math.round(Math.random()) ? 1 : -1);
        var x = i*64;
        var y = Math.ceil(Math.random() * 16) * (Math.round(Math.random()) ? 1 : -1)
        $(e).css('transform', 'rotate('+d+'deg) translate('+x+'px, '+y+'px')
      });
    }, function(){
      $(this).find('.mini-preview-wrapper').css(
        'transform','rotate(-3deg) scale(.1)'
      );
    }
  );

  $('.multi-preview').on('mousemove',function(e) {
    $(this).find('.mini-preview-wrapper').each(function() {
      $(this).css({
        left: e.clientX + 16,
        top: e.clientY + 16
      });
    });
  });

  $('.open-drawer').on('click',function(){
    $('body').addClass('drawer-open');
    $('.drawer').addClass('open');
    setTimeout(function() {
      $('#password').focus();
    }, 333);
  });

  $('.overlay, .drawer .close').on('click', function(event) {
    $('body').removeClass('drawer-open');
    $('.drawer').removeClass('open');
  });

  $(document).keyup(function(e) {
    if (e.key === "Escape") { // or e.keyCode === 27
      $('body').removeClass('drawer-open');
      $('.drawer').removeClass('open');
    }
  });

  $('.password-form').submit(function(event) {
    var guess = $('#password').val();
    var password = 'blackbird'
    if (guess !== password) {
      event.preventDefault(); // Prevent form submission
      $('.password-form fieldset').addClass('error');
      if(!$('.password-form fieldset .error').length) {
        $('<div class="error error">Oh, wrong password? Really? I mean, who are these people putting in the wrong password? You&rsquo;ve got one job here&ndash;enter the right word. But no, now you&rsquo;re locked out, staring at the screen like it&rsquo;s going to magically say, &lsquo;Just kidding, come on in!&rsquo; Nope. Wrong password. It&rsquo;s like the doorbell to a secret club and you&rsquo;re ringing the wrong door. Try again, buddy! <i class="ital">&mdash;<a href="https://chatgpt.com/" target="_blank">ChatGPT</a> Jerry Seinfeld</i></div>').insertAfter('#password');
      }
    } else if (guess == password) {
      event.preventDefault(); // Prevent form submission
      window.location.href = "https://nathanrp.github.io/work";
    }
  });

  $('#password').on('input', function() {
    $('.password-form fieldset').removeClass('error');
    $('.password-form fieldset .error').remove();
  });

  $('#appearance').change(function() {
    $('body').toggleClass('dark');
  });

});