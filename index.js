let bar = document.getElementsByClassName("bar")[0];
let mob_nav = document.getElementsByClassName("mob_nav")[0];

bar.addEventListener("click", function() {
    mob_nav.style.width = '150px'
    // bar.style.display = 'none'
})

let close = document.getElementsByClassName("close")[0];

close.addEventListener("click", function() {
    mob_nav.style.width = '0px'
    // bar.style.display = 'block'
})

let nav = document.getElementsByClassName("navbar")[0];

window.onscroll = function() {scroll()};

function scroll(){
    if(document.body.scrollTop === 0 && document.documentElement.scrollTop === 0){
        nav.style.backgroundColor = 'transparent'
        
    }else{
        nav.style.backgroundColor = '#051922'
    }
}

// CAROUSEL

var owl = $('.carousel_one');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

var owl = $('.carousel_two');
owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
});
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});


function contactPage() {
    let contact_btn = document.getElementById("foBtn");
    let form_val = document.querySelectorAll("#fo_fil");

    contact_btn.addEventListener("click", () => {
        let isEmpty = false;

        form_val.forEach((e) => {
            if (e.value.trim() === "") {
                isEmpty = true;
            }
        });

        if (!isEmpty) {
            form_val.forEach((e) => {
                e.value = ""; // Clear fields after successful submission
            });
            window.location.href = "contactfilled.html"; // Redirect if all fields are filled
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
}


contactPage()