// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

// // Get references to the image element and the container
// const image = document.getElementById('rotate-image');
// const container = document.getElementById('container');

// // Function to update the image's perspective-based rotation
// function rotateImage(event) {
//   // Calculate the rotation angles based on the mouse position
//   const containerRect = container.getBoundingClientRect();
//   const x = event.clientX - containerRect.left - containerRect.width / 2;
//   const y = event.clientY - containerRect.top - containerRect.height / 2;
//   const rotationX = -y / containerRect.height * 360; // Adjust the factor as needed
//   const rotationY = x / containerRect.width * 360; // Adjust the factor as needed

//   // Apply the rotation transform to the image with perspective
//   image.style.transform = `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
// }


// // Add a mousemove event listener to the container
// container.addEventListener('mousemove', rotateImage);


// Get a reference to the new image element and its container
var image1 = document.getElementById('rotate-img1');
var container1 = document.getElementById('img1');

// Function to update the new image's perspective-based rotation
function rotateImage1(event) {
  // Calculate the rotation angles based on the mouse position
  const containerRect = container1.getBoundingClientRect();
  const x = event.clientX - containerRect.left - containerRect.width / 2;
  const y = event.clientY - containerRect.top - containerRect.height / 2;
  const rotationX = -y / containerRect.height * 360; // Adjust the factor as needed
  const rotationY = x / containerRect.width * 360; // Adjust the factor as needed

  // Apply the rotation transform to the new image with perspective
  image1.style.transform = `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

// // Reset the new image's rotation when the mouse leaves its container
// container1.addEventListener('mouseleave', function () {
//   image1.style.transform = 'rotateX(0deg) rotateY(0deg)';
// });

// Add a mousemove event listener to the new container
container1.addEventListener('mousemove', rotateImage1);


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


// document.getElementById("kip1").addEventListener("click",handleKip)
// document.getElementById("kip2").addEventListener("click",handleKip)
// document.getElementById("njug1").addEventListener("click",handleNjug)
// document.getElementById("njug2").addEventListener("click",handleNjug1)

// function handleKip(){
//   const targetElement = document.querySelector('kip1');
//   targetElement.scrollIntoView({ behavior: 'smooth' });
// }

// function hanldeKip(){
//   const targetElement = document.querySelector('h4');
//   targetElement.scrollIntoView({ behavior: 'smooth' });
// }
// function hanldeNjug(){
//   const targetElement = document.querySelector('h3');
//   targetElement.scrollIntoView({ behavior: 'smooth' });
// }


const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const frameCount = 130;
const images = [];
let imageLoadCount = 0; // Track the number of loaded images
const body = { frame: 0 };
// Function to handle image loading
function onImageLoad() {
    imageLoadCount++;

    // Check if all images are loaded
    if (imageLoadCount === frameCount) {
        // All images are loaded, now you can start rendering
       

        gsap.to(body, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                scrub: 1,
                pin: ".canvas",
                end: "100%",
            },
            onUpdate: render,
        });
    }
}

// Preload all images
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.onload = onImageLoad; // Set the load event handler
    img.src = `./slides/${i.toString().padStart(4, '0')}.png`;
    images.push(img);
}

function render() {
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[Math.floor(body.frame)], 0, 0);
}
