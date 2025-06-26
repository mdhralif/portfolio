var typed= new Typed(".x",{
    strings:["Web Developer","Graphic Designer","Game Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,

});

//Navlinks Active
let sections= document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll= ()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });

        };

    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
//////////////////////////////////////


//Toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};
//////////////////////////////////////


//Scroll Reveal
ScrollReveal({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, .heading, .home-content p, .about-content',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});



// Skill bars animation
function animateSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillCards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize skill bar animation when DOM is loaded
document.addEventListener('DOMContentLoaded', animateSkillBars);
//////////////////////////////////////

// Show More Skills Functionality
document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenSkills = document.querySelectorAll('.hidden-skill');
    const btnText = showMoreBtn.querySelector('.btn-text');
    
    if (showMoreBtn && hiddenSkills.length > 0) {
        let isExpanded = false;
        
        showMoreBtn.addEventListener('click', function() {
            isExpanded = !isExpanded;
            
            hiddenSkills.forEach((skill, index) => {
                if (isExpanded) {
                    setTimeout(() => {
                        skill.classList.add('show');
                    }, index * 50); // Stagger the animation
                } else {
                    skill.classList.remove('show');
                }
            });
            
            // Update button text and icon
            if (isExpanded) {
                btnText.textContent = 'Show Less Skills';
                showMoreBtn.classList.add('expanded');
            } else {
                btnText.textContent = 'Show More Skills';
                showMoreBtn.classList.remove('expanded');
            }
            
            // Smooth scroll to show the new skills
            if (isExpanded) {
                setTimeout(() => {
                    const firstHiddenSkill = document.querySelector('.hidden-skill.show');
                    if (firstHiddenSkill) {
                        firstHiddenSkill.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest' 
                        });
                    }
                }, 300);
            }
        });
    }
});
