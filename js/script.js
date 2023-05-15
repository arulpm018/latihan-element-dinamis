let slideIndex=0;


const updateSlide=(n)=>{
    slideIndex+=n;
    showSlide(slideIndex);
    console.log(n);
}

const showSlide=(n)=>{
    const slidearray = document.getElementsByClassName("project");
    if(n>slidearray.length-1){
        slideIndex=0;
    }
    if(n<0){
        slideIndex=slidearray.length-1;
    }
    for(let i=0;i<slidearray.length;i++){
        slidearray[i].style.display="none";
    }
    slidearray[slideIndex].classList.add(n > 0 ? 'scrollRight' : 'scrollLeft');
    slidearray[slideIndex].style.display = "block";
  
    // Remove animation classes from previous slide
    slidearray[slideIndex].classList.remove(n > 0 ? 'scrollLeft' : 'scrollRight');
    
}

showSlide(slideIndex)

const project = document.getElementsByClassName("project");
const modal = document.querySelectorAll(".modal img");

var check = 0;

for (let i = 0; i < project.length; i++) {
    (function() {
      let check = 0; // Encapsulate check variable within the closure for each project element
  
      project[i].addEventListener('click', function() {
        if (check === 0) {
          modal[i].style.display = "block";
          console.log(check);
          check += 1;
        } 
      });
    
      modal[i].addEventListener('click',function(){
        if (check === 1) {
            modal[i].style.display = "none";
            check -= 1;
          }
      })
    })();
  }

const input = document.getElementById("form1");
const msg  = document.getElementById("msg1");
const submit = document.getElementsByClassName("button-submit")

function validateEmail(email) {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const input = document.getElementById("form1");
    const msg = document.getElementById("msg1");
    const email = input.value;
    const isvalidemail = validateEmail(email);
  
    if(isvalidemail){
      msg.innerHTML="";
      form.submit();
    } else {
      msg.innerHTML="Invalid email";
    }
  });



  

  
  
  
  


