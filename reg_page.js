document.addEventListener("DOMContentLoaded",function(){
const reg_form=document.querySelector("#registrationForm");
const successMessage = document.querySelector("#successMessage");

reg_form.addEventListener("submit" , function(e) {
    e.preventDefault();
    if(preventError()){
        reg_form.classList.add("hidden");
        successMessage.classList.remove("hidden");
    }
});


function preventError(){
let isRight=true;

     const fullName=document.querySelector("#fullName").value.trim();
    const email=document.querySelector("#email").value.trim();
    const phone=document.querySelector("#phone").value.trim();
    const teamName=document.querySelector("#teamName").value.trim();
    const idea=document.querySelector("#startupIdea").value.trim();
   
    const nameError = document.querySelector("#fullError");
        const emailError = document.querySelector('#emailError');
        const phoneError = document.querySelector('#phoneError');
        const teamError = document.querySelector('#teamError');
        const ideaError = document.querySelector('#ideaError');
        
      const errorElements = [nameError, emailError, phoneError, teamError, ideaError];
        errorElements.forEach(el => {
            el.textContent = '';
            el.classList.add('hidden');
        });

    if(!fullName){
        showError(nameError, "Full name is required");
        isRight=false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email){
        showError(emailError, "Email address is required");
        isRight=false;
    }
    else if (!emailPattern.test(email)){
        showError(emailError,  "Please enter a valid email address");
        isRight=false;
    }

   const phonePattern = /^\d{10}$/;
    if(!phone){
        showError(phoneError, "phone number is required");
        isRight=false;
    }
    else if (!phonePattern.test(phone)){
        showError(phoneError,"Please enter a valid 10-digit phone number");
        isRight=false
    }

    if(!teamName){

        showError(teamError,"Team name is required");
        isRight=false;
    }

    if(!idea){
        showError(ideaError , "Startup pitch idea description is required");
        isRight=false;
    }
    else if(idea.length <15){
  showError(ideaError, "Please write at least 15 characters that briefly describe your pitch idea");
  isRight=false;
    }

    return isRight;
}
   
function showError(element,message){
    if (element){
          element.textContent=message;
    element.classList.remove("hidden");
    }
  
}
});

