// Select the buttons and elements
const nextButton = document.querySelector('.btn-next');
const backButton = document.querySelector('.btn-back');
const steps = document.querySelectorAll('.list-container li'); 
const formPages = document.querySelectorAll('.form-step'); 
const leftSide = document.querySelector('.left-side');
const allBtn = document.querySelector('.btn-group');
const closeBtn=document.querySelector('.btn-close');
console.log(nextButton, backButton, steps, formPages,allBtn,closeBtn);

// Current step tracker
let currentStep = 1;


function updateUI() {
    // Loop through all steps and form pages
    steps.forEach((step, index) => {
        console.log(index);
        if (index === currentStep - 1) {
            step.classList.add('active');
            formPages[index].style.display = 'block';
            if (currentStep === 1) {
                backButton.style.display = "none";
                closeBtn.style.display="blcok"
            }
            else {
                backButton.style.display = "block";
                closeBtn.style.display = "none";
            }
          
        } 
        else {
            step.classList.remove('active');
            formPages[index].style.display = 'none';
        }
    });
}

// Event listener for Next Button
nextButton.addEventListener('click', () => {
    if (currentStep < steps.length) {
        ++currentStep;
        updateUI();
    }
});

// Event listener for Back Button
backButton.addEventListener('click', () => {
    if (currentStep > 1) {
        --currentStep;
        updateUI();
    }
});

updateUI();
