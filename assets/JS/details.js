document.addEventListener("DOMContentLoaded", function () {
    // Element Selectors
    const steps = document.querySelectorAll('.list-container li');
    const formPages = document.querySelectorAll('.form-step');
    const closeBtn = document.querySelector('.btn-closesc');
    const nextButton = document.querySelector('.btn-next');
    const backButton = document.querySelector('.btn-back');

    // Current Step Tracker
    let currentStep = 1;

    // Function to Validate the Current Step
    function validateCurrentStep() {
        const currentForm = formPages[currentStep - 1]; // Get the current form step
        const inputs = currentForm.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(input => {
            const errorSpan = input.nextElementSibling;
            // Clear previous errors
            input.classList.remove('is-invalid');
            if (errorSpan) errorSpan.textContent = "";

            if (input.value.trim() === "") {
                isValid = false;
                input.classList.add('is-invalid'); // Highlight invalid input
                if (errorSpan) {
                    errorSpan.textContent = "This field is required.";
                } else {
                    const span = document.createElement('span');
                    span.classList.add('error-message');
                    span.innerText = "This field is required.";
                    span.style.color="red";
                    input.parentNode.appendChild(span);
                }
            }
        });

        return isValid;
    }

    // Function to Update UI
    function updateUI() {
        steps.forEach((step, index) => {
            const isActive = index === currentStep - 1;

            // Toggle Active Class and Visibility
            step.classList.toggle('active', isActive);
            formPages[index].style.display = isActive ? 'block' : 'none';

            // Handle Button Visibility
            if (currentStep === 1) {
                backButton.style.display = 'none';
                closeBtn.style.display = 'block';
            } else if (currentStep === steps.length) {
                nextButton.style.display = 'none';
                closeBtn.style.display = 'none';
            } else {
                backButton.style.display = 'block';
                nextButton.style.display = 'block';
                closeBtn.style.display = 'none';
            }
        });
    }

    // Event Listener for Next Button
    nextButton?.addEventListener('click', () => {
        if (validateCurrentStep() && currentStep < steps.length) {
            currentStep++;
            updateUI();
        }
    });

    // Event Listener for Back Button
    backButton?.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateUI();
        }
    });

    // Initialize UI
    // updateUI();
});
// navbar scroll bar function
document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    console.log(header)
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
});
// swiper slider js 
// var swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   direction: getDirection(),
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   autoplay: {
//     delay: 1000, // 3 seconds delay between slides
//     disableOnInteraction: false, // Keep autoplay running even after user interaction
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//   return direction;
// }

var swiper = new Swiper(".swiper.footer-slider", {
    slidesPerView: 1,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000, // 3 seconds delay between slides
      disableOnInteraction: false, // Keep autoplay running even after user interaction
    },
  });
  
