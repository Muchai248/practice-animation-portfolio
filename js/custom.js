// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// slider
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[2].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[2].value = maxVal - priceGap
            }else{
                rangeInput[2].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[2].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100000) + "%";
            range.style.right = 100000 - (maxVal / rangeInput[2].max) * 100000 + "%";
        }
    });
});

// Get references to the image element and the container
var image = document.getElementById('rotate-image');
var container = document.getElementById('container');

// Function to update the image's perspective-based rotation
function rotateImage(event) {
  // Calculate the rotation angles based on the mouse position
  var containerRect = container.getBoundingClientRect();
  var x = event.clientX - containerRect.left - containerRect.width / 2;
  var y = event.clientY - containerRect.top - containerRect.height / 2;
  var rotationX = -y / containerRect.height * 20; // Adjust the factor as needed
  var rotationY = x / containerRect.width * 20; // Adjust the factor as needed

  // Apply the rotation transform to the image with perspective
  image.style.transform = `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

// Add a mousemove event listener to the container
container.addEventListener('mousemove', rotateImage);
