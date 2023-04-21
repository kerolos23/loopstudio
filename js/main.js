// Select the HTML element with the ID "year"
const copyrightElement = document.querySelector("#year");

// Get the current year and set the text content of the selected element to it
const currentDate = new Date();
copyrightElement.textContent = `${currentDate.getFullYear()}`;

// Select the burger and close icons
let burgerIcon = document.querySelector(".fa-bars"),
    closeIcon = document.querySelector(".fa-xmark"),
    navBar = document.querySelector("nav");

// Add event listeners to the icons
burgerIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

// Define function to toggle the visibility of the menu icons
function toggleMenu(){
    burgerIcon.classList.toggle("close");
    closeIcon.classList.toggle("close");
    navBar.classList.toggle("open-nav")
};
