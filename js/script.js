/**
 * 
 */
(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);


var myaudio = document.getElementById("my_audio");
$(document).on('click', function () {
    myaudio.play();
    console.log('Shaadi me zaroor aana');
});


// Set the date we're counting down to
var countDownDate = new Date("dec 03, 2024 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>" + days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);







/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '1.5rem',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.ganesha',{origin:'top',delay:200})
sr.reveal(`.raj`, { origin: 'left', delay: 500 })
sr.reveal(`.jyoti`, { origin: 'right', delay: 500 })
sr.reveal(`.gif,.home_txt`, { delay: 1000, origin: 'top' })
sr.reveal(`.top-right-decoration,.top-left-decoration`, { origin: 'left', delay: 1500 })
sr.reveal(`.responsive-table__row`, { interval: 200 })
sr.reveal(`.table_container`, { delay: 100, origin: 'top' })
sr.reveal(`.happiness,.hindi_text`, { delay: 400, origin: 'bottom' })
sr.reveal(`.social__links`, { delay: 2000, origin: 'bottom', interval: 200 })
sr.reveal(`.newsletter__description,.home__bottom`, { origin: 'left', delay: 400 })
sr.reveal(`.newsletter__form,.CTA`, { origin: 'right', delay: 400 })
