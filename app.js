"use strict";

let menu = document.getElementById('mobile-expand-nav');

// function showMenu () {
// if ( menu.style.visibility ==='hidden') {
//     menu.style.visibility ='visible';
// } else {
//     menu.style.visibility ='hidden';
// }
    
// };



const blocKoda = `<ul>
<li><a href='index.html'>Home</a></li>
<li><a href=''>PC News</a></li>
<li><a href=''>Console News</a></li>
<li><a href='about-us.html'>About us</a></li>
<li><a href='contact-us.html'>Contact us</a></li>
</ul>`;

function showMenuu () {

 



if(menu.style.display === 'none') {
    menu.style.display ='block';
menu.innerHTML = blocKoda;
} else {
    menu.style.display = 'none';
}


}


let submitButton = document.getElementById('submit-btn');

function submitBTN () {
    alert(`Your message was sent!`);
}



// ARROW UP

// Select the element you want to show
const targetElement = document.querySelector('.arrow-up');

// Function to handle scroll
function checkScroll() {
  const elementPosition = targetElement.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  if (elementPosition <= viewportHeight) {
    // Add a class to make the element visible
    targetElement.classList.add('visible');
    // Remove the event listener once the element is visible
    window.removeEventListener('scroll', checkScroll);
  }
}

// Add the scroll event listener
window.addEventListener('scroll', checkScroll);