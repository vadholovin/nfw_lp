/* NAVIGATION */
(function() {
  const nav = document.querySelector('.nav'),
        navList = document.querySelector('.nav-list'),
        navHamburger = document.querySelector('.nav-hamburger');

  navHamburger.addEventListener('click', function() {
    setTimeout(function() {
      navList.classList.toggle('is-hidden');
    }, 150);
    navHamburger.classList.toggle('nav-hamburger--check');
  });

  nav.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-item')) {
      setTimeout(function() {
        navList.classList.toggle('is-hidden');
      }, 50);
      navHamburger.classList.toggle('nav-hamburger--check');
    }
  });
})();


/* ACCORDION */
(function() {
  const programItems = document.querySelector('.program-items');

  programItems.addEventListener('click', function(e) {
    if (e.target.classList.contains('program-item__title')) {
      setTimeout(function() {
        e.target.classList.toggle('is-active');
      }, 100);
    }
  });
})();


/* CHECK IF INPUT FIELDS ARE EMPTY */
(function() {
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();


/* NAVIGATION SCROLL */
(function() {
  const header = document.querySelector('.page-header');

  window.smoothScroll = function(target) {
    var scrollContainer = target;
    
    do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer)
        return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    var targetY = 0;

    do { //find the top of target relatively to the container
      if (target === scrollContainer)
        break;
      targetY += target.offsetTop - 20;
    } while (target = target.offsetParent);

    var scroll = function (c, a, b, i) {
      i++;
      if (i > 30)
        return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function () {
        scroll(c, a, b, i);
      }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  };
})();


/* STICKY HEADER */
(function() {
  const header = document.querySelector('.page-header'),
        heroSection = document.querySelector('.hero .row');
  var headerPosition = header.offsetTop;

  window.addEventListener('scroll', setSticky);

  function setSticky() {
    if (window.pageYOffset >= headerPosition) {
      header.classList.add('page-header--sticky');
    } else {
      header.classList.remove('page-header--sticky');
    }
  }

  if (header.classList.contains('page-header--sticky')) {
    heroSection.style.height = '100vh';
  }
})();


/* INITIALIZE UNSLIDER */
$(document).ready(function() {
  $('.reviews-slider').unslider({
    infinite: true,
    arrows: {
      prev: '<a class="unslider-arrow prev"></a>',
      next: '<a class="unslider-arrow next"></a>',
    },
    speed: 300,
  });
});


/* SHOW/HIDE MODAL BOX FOR FORM */
(function() {
  const modalBox = document.querySelector('.modal-box'),
        background = document.querySelector('.modal-background'),
        closeBtn = document.querySelector('.modal-content__close');

  background.addEventListener('click', hideModalBox);

  closeBtn.addEventListener('click', hideModalBox);

  function hideModalBox() {
    modalBox.classList.add('is-hidden');
  }
})();