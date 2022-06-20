// Select Elements
var heart = document.getElementById("heart");

var counter = document.getElementById("counter");

//Set the counter to 0
counter.innerHTML = "0";

// Store value of counter in a variable
let count = parseInt(counter.innerHTML);

//Add click event to the heart icon
heart.addEventListener("click", () => {
  //1. Check if the heart is clicked
  heart.classList.toggle("clicked");
  
  //2. If clicked, increase counter, else decrease it
   if (heart.classList.contains("clicked")) {
        counter.innerHTML = ++count;
        document.getElementById("heart-icon").style.fill = "currentColor";
    } else {
        counter.innerHTML = --count;
        document.getElementById("heart-icon").style.fill = "none";
    }
});
