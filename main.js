
// modal
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
  
// testimonials 
  var quoteCounter = 0;
  var quoteLength = $('blockquote').length;

  setInterval(function () {
    $('blockquote').eq(quoteCounter).fadeOut(800, function () {
      if (quoteCounter === quoteLength - 1) {
        quoteCounter = 0;
      } else {
        quoteCounter += 1;
      };
      $('blockquote').eq(quoteCounter).fadeIn();
    });

  }, 7000);
