let onoff = document.getElementById("slider5");
time = document.getElementById("bottom-slider-head-time")
var number = 0;

onoff.addEventListener("click", function() {
    if (number === 0) {
        time.innerHTML = "year"
        number = 1;
    } else {
        time.innerHTML = "month"
        number = 0;
    }
})


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    if (time.innerHTML === "year") {
        output.innerHTML = "$" + 12 * this.value;
    } else {
        output.innerHTML = "$" + this.value;
    }
}

output.innerHTML = "$16"





const button = document.getElementById("bottom-slider-stuff-text3");

function checkScreenWidth() {
    if (window.innerWidth < 620) {
        button.innerHTML = "-25%";
        button.style.width = "45px"
    } else {
        // Set the default text if the screen width is greater than or equal to 500px
        button.innerHTML = "25% discount";
        button.innerHTML = "25% discount";
        button.style.width = "90px"
    }
}
// Check the screen width on load and whenever the window is resized

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);