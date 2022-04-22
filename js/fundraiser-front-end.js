!function(a){a.fn.percentageLoader=function(b){this.each(function(){function q(){p.customAttributes.arc=function(a,b,c){var h,d=360/b*a,e=(90-d)*Math.PI/180,f=j+c*Math.cos(e),g=k-c*Math.sin(e);return h=b==a?[["M",j,k-c],["A",c,c,0,1,1,j-.01,k-c]]:[["M",j,k-c],["A",c,c,0,+(d>180),1,f,g]],{path:h}},p.path().attr({arc:[100,100,l],"stroke-width":d.strokeWidth,stroke:d.bgColor}),e&&(m=p.path().attr({arc:[.01,100,l],"stroke-width":d.strokeWidth,stroke:d.ringColor,cursor:"pointer"}),r(e,100,l,m,2)),n=p.text(j,k,e+"%").attr({font:d.fontWeight+" "+d.fontSize+" Arial",fill:d.textColor})}function r(a,b,c,d){f?d.animate({arc:[a,b,c]},900,">"):a&&a!=b?d.animate({arc:[a,b,c]},750,"elastic"):(a=b,d.animate({arc:[a,b,c]},750,"bounce",function(){d.attr({arc:[0,b,c]})}))}var c=a(this),d=a.extend({},a.fn.percentageLoader.defaultConfig,b),e=parseInt(c.children(d.valElement).text()),f=!0,h=parseInt(c.css("width")),i=parseInt(c.css("height")),j=h/2,k=i/2,l=j-d.strokeWidth/2,m=null,n=null,p=Raphael(this,h,i);q()})},a.fn.percentageLoader.defaultConfig={valElement:"p",strokeWidth:20,bgColor:"#d9d9d9",ringColor:"#d53f3f",textColor:"#9a9a9a",fontSize:"16px",fontWeight:"800"}}(jQuery);
        
$("#alert-btn").click(function() {
    $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
});

$( ".add-cart-orange" ).click(function() {
  $(".info-viewcart").fadeIn( 300 );
  $(".info-viewcart").css('display','block');
});

// function(){
//     $("#cart").on("click", function() {
//     $(".shopping-cart").fadeToggle( "fast");
//     });

//     })();

    $(".other-amt-dw").on("click", function(e) {
        e.preventDefault();
       $(this).css('display','none');
       $(".other-amt-detail").removeClass('d-none');
    });
    $("#close-card").on("click", function(e){
       e.preventDefault();
       $(".other-amt-detail").addClass('d-none');
       $(".other-amt-dw").css('display','block');
    });

//     window.onload = function() {
// var styledRanges = document.getElementsByClassName('styled_range');
// for (var i=0; i<styledRanges.length; i++) {
//  var thumbRange = null, trackRange = null;
//  for (var j=0; j<styledRanges[i].children.length; j++) {
//    var child = styledRanges[i].children[j];
//    if (child.className === 'thumb_range')
//      var thumbRange = child;
//    else if (child.className === 'track_range')
//      var trackRange = child;
//  }
//  thumbRange.oninput = function(thumbRange, trackRange) {
//    return function(e) {
//      trackRange.value = thumbRange.value;
//    };
//  }(thumbRange, trackRange);
// }
// }

$('.percent').percentageLoader({
    bgColor: 'transparent',
    ringColor: '#E55608',
    textColor: '#222D34',
    fontSize: '20px',
    strokeWidth: 10
  });

  $(window).on('load', function()
  // $(window).load(function()
  {
      $('#myModal').modal('show');
  });

  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
   });
   
   //Range
   const allRanges = document.querySelectorAll(".range-wrap");
   allRanges.forEach(wrap => {
     const range = wrap.querySelector(".range");
     const bubble = wrap.querySelector(".bubble");
   
     range.addEventListener("input", () => {
       setBubble(range, bubble);
     });
     setBubble(range, bubble);
   });
   
   function setBubble(range, bubble) {
     const val = range.value;
     const min = range.min ? range.min : 0;
     const max = range.max ? range.max : 100;
     const newVal = Number(((val - min) * 100) / (max - min));
     bubble.innerHTML = val ;
      // console.log(val + " ====== " +newVal);
      $("body").get(0).style.setProperty("--webkitProgressPercent", newVal+"%");
     // Sorta magic numbers based on size of the native UI thumb
     bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
   }
   
   
    (function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })();

    $(document).on('click', '.see-password', function () {
      // your function here
      const password = $(this).parent().find('.password ');
      console.log(password)
      const type = $(password).attr('type') === "password" ? "text" : "password";
      $(password).attr("type", type);
      $(this).find('.far').toggleClass('fa-eye');
      $(this).find('.far').toggleClass('fa-eye-slash');
    });