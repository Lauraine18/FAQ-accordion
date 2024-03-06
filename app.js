const ans1 = document.querySelector(".ans1");
const ans2 = document.querySelector(".ans2");
const ans3 = document.querySelector(".ans3");
const ans4 = document.querySelector(".ans4");
let display = 0;
const toggleButtton1 = document.getElementById("toggleButton1");
const toggleButtton2 = document.getElementById("toggleButton2");
const toggleButtton3 = document.getElementById("toggleButton3");
const toggleButtton4 = document.getElementById("toggleButton4");

//Display ans#1 and adding event listener for the submit button
function hiddenShow(){
  if(display === 1){
    ans1.style.display = "none";
    display = 0;
  }else{
    ans1.style.display = "block";
    display = 1;
  }
}

//Dislay ans#2 and adding event listener for the submit button
function hiddenShow1(){
  if(display === 1){
    ans2.style.display = "block";
    display = 0;
  }else{
    ans2.style.display = "none";
    display = 1;
  }
}

//Display ans#3 and adding event listener for the submit button
function hiddenShow2(){
  if(display === 1){
    ans3.style.display = "none";
    display = 0;
  }else{
    ans3.style.display = "block";
    display = 1;
  }
}

//Display ans#4 and adding event listener for the submit button
function hiddenShow3(){
  if(display === 1){
    ans4.style.display = "block";
    display = 0;
  }else{
    ans4.style.display = "none";
    display = 1;
  }
}

//set initial state
let isActive = false;

 //Active state for button #1
 toggleButtton1.addEventListener("click", function() {
   
 //Toggle the active state  of the button
    isActive = !isActive;

 // Update button text based its active or not
 if(isActive){
    toggleButtton1.textContent = "-";
    toggleButtton1.classList.add("active");
 }else{
    toggleButtton1.textContent = "+";
    toggleButtton1.classList.remove("active");
 }
});

// Active state for button #2
 toggleButtton2.addEventListener("click", function() {
   
 //Toggle the active state  of the button
    isActive = !isActive;

 // Update button text based its active or not
 if(isActive){
    toggleButtton2.textContent = "+";
    toggleButtton2.classList.add("active");
 }else{
    toggleButtton2.textContent = "-";
    toggleButtton2.classList.remove("active");
 }
});

 //Active state for button #3
 toggleButtton3.addEventListener("click", function() {
   
    //Toggle the active state  of the button
    isActive = !isActive;

 // Update button text based its active or not
 if(isActive){
    toggleButtton3.textContent = "-";
    toggleButtton3.classList.add("active");
 }else{
    toggleButtton3.textContent = "+";
    toggleButtton3.classList.remove("active");
 }
});

// Active state for button #4
 toggleButtton4.addEventListener("click", function() {
    
    //Toggle the active state  of the button
    isActive = !isActive;

 // Update button text based its active or not
 if(isActive){
    toggleButtton4.textContent = "+";
    toggleButtton4.classList.add("active");
 }else{
    toggleButtton4.textContent = "-";
    toggleButtton4.classList.remove("active");
 }
});

