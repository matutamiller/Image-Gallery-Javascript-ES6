const current = document.querySelector("#current"); //getting access to current image
const imgs = document.querySelectorAll(".imgs img"); //getting access to all images
const opacity = 0.6; //setting opacity for the clicked image

// Set first img opacity
imgs[0].style.opacity = opacity;

//querySelectorAll returns a NodeList which basically works like an array
//next step is looping through these images and add an EventListener to each image
// using higher order method forEach for returned NodeList
imgs.forEach(img => img.addEventListener("click", imgClick)); //callback function in ES6 written as arrow function

function imgClick(e) {
  // Reset the opacity of all the images
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
