document.querySelector("#login").addEventListener("click", function () {
  // Toggle the visibility of the login modal
  let loginModal = document.getElementById("loginModal");
  if (loginModal.classList.contains("hide")) {
    loginModal.classList.remove("hide"); 
    loginModal.classList.add("show");
  }
});

document.querySelector("#cencel").addEventListener("click", function cls(){
  let loginModal= document.getElementById("loginModal");
  if(loginModal.classList.contains("show")){
    loginModal.classList.remove("show");
    loginModal.classList.add("hide");
  }
})

document.querySelector(".signup-modal-js").addEventListener("click", function signup(){
  let signupModal= document.getElementById("signupModal");
  if(signupModal.classList.contains("hide")){
    signupModal.classList.remove("hide");
    signupModal.classList.add("show");
  }
})

document.querySelector("#cencelsin").addEventListener("click", function cls(){
  let signupModal= document.getElementById("signupModal");
  if(signupModal.classList.contains("show")){
    signupModal.classList.remove("show");
    signupModal.classList.add("hide");
  }
})

document.querySelector("#login-signup").addEventListener("click", function(){
  let loginModal= document.getElementById("loginModal");
  let signupModal= document.getElementById("signupModal");
  if(loginModal.classList.contains("show") && signupModal.classList.contains("hide")){
    loginModal.classList.remove("show");
    loginModal.classList.add("hide");
    signupModal.classList.remove("hide");
    signupModal.classList.add("show");
  }
})

// LOGIN FUNCTIONALITY
function validateLogin(){
  let username= document.getElementById("username").value;
  let password= document.getElementById("password").value;
  let err= document.getElementById("error")

  //checks whether username empty
  if(username.trim()===""){
    err.textContent="Username can't be empty";
    return false;
  }

  if(password.trim()===""){
    err.textContent="Password can't be empty";
    return false;
  }

  if(password.length<8){
    err.textContent="Password must be at least 8 character long";
    return false;
  }
  if(!/[A-Z]/.test(password)){
    err.textContent="Password must contain at least one uppercase letter";
    return false;
  }

  if(!/[a-z]/.test(password)){
    err.textContent="Password must contain at least one lowercase letter";
    return false;
  }
  if(!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)){
    err.textContent="Password must contain at least one special character";
    return false;
  }

  if(!/\d/.test(password)){
    err.text="Password must contain at least one digit";
    return false
  }
  return true;
}

// Displaying the slides

// let slides= document.querySelectorAll(".slides");
// function showSlide(n){
//   // console.log(slides[1])
//   if(n==1){
//     slides[1].classList.remove("show");
//     slides[2].classList.remove("show");
//     slides[0].classList.add("show");
//   }
//   if(n==2){
//     slides[0].classList.remove("show");
//     slides[2].classList.remove("show");
//     slides[1].classList.add("show");
//   }
//   if(n==3){
//     slides[0].classList.remove("show");
//     slides[1].classList.remove("show");
//     slides[2].classList.add("show");
//   }
// }

let slideIndex=1;

function showSlide(n){
  let i;
  let slides= document.querySelectorAll(".slides");
  let dot= document.querySelectorAll(".dot");

  if(n>slides.length){ // If passed value is more than the length of the slide lenght
    slideIndex=1;
  }
  if(n<1){ //if passed value less then the slide lenght 
    slideIndex=slides.length;
  }
  for(i=0; i<slides.length; i++){ // can be used if show class which were added to be remvoed
    slides[i].classList.remove("show"); 
  }
  for(i=0; i<dot.length;i++){
    dot[i].classList.remove("active");
  }
  

  slides[slideIndex-1].classList.add("show");
  dot[slideIndex-1].classList.add("active");
}
showSlide(slideIndex); // It will display first slide

function plusSlide(n){
  showSlide(slideIndex+=n)
}

function currentSlide(n){
  showSlide(slideIndex=n);
}

setInterval(()=>{

  showSlide(slideIndex);
  slideIndex+=1;
  if(slideIndex==4){
    slideIndex=1;
  }

}, 2000)

