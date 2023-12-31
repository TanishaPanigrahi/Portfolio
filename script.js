let menutIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menutIcon.onclick = () => {
    menutIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)

    menutIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

  // for submit button for contact
    function sendmail(){
        let parms = {
            name: document.getElementById("name").value, 
            email: document.getElementById("email").value, 
            subject: document.getElementById("subject").value, 
            mobile: document.getElementById("mobile").value, 
            message: document.getElementById("message").value, 
        }

        emailjs.send("service_09kajle","template_iwnw0mu",parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
    }

    function openMultipleTabs() {
        
        var link1 = "Major.pdf";
        var link2 = "major_report.pdf";

        // Open links in different tabs
        window.open(link1, '_blank');
        window.open(link2, '_blank');
    }