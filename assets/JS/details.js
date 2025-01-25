document.addEventListener("DOMContentLoaded", () => {
    // Element Selectors
    const steps = document.querySelectorAll('.list-container li');
    const formPages = document.querySelectorAll('.form-step');
    const closeBtn = document.querySelector('.btn-closesc');
    const nextButton = document.querySelector('.btn-next');
    const backButton = document.querySelector('.btn-back');

    // Current Step Tracker
    let currentStep = 1;

    // Helper Function to Create Error Span
    const createErrorSpan = (input) => {
        const span = document.createElement('span');
        span.classList.add('error-message');
        span.innerText = "This field is required.";
        span.style.cssText = "margin: 0; padding: 0; font-size: 10px; color: red;";
        input.parentNode.appendChild(span);
        return span;
    };

    // Function to Validate the Current Step
    const validateCurrentStep = () => {
        const currentForm = formPages[currentStep - 1];
        const inputs = currentForm.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(input => {
            const errorSpan = input.nextElementSibling;
            input.classList.remove('is-invalid');
            if (errorSpan) errorSpan.textContent = "";

            if (input.value.trim() === "") {
                isValid = false;
                input.classList.add('is-invalid');
                if (errorSpan) {
                    errorSpan.textContent = "This field is required.";
                } else {
                    createErrorSpan(input);
                }
            }
        });

        return isValid;
    };

    // Function to Update UI
    const updateUI = () => {
        steps.forEach((step, index) => {
            const isActive = index === currentStep - 1;

            step.classList.toggle('active', isActive);
            formPages[index].style.display = isActive ? 'block' : 'none';

            // Handle Button Visibility
            backButton.style.display = (currentStep === 1) ? 'none' : 'block';
            closeBtn.style.display = (currentStep === 1) ? 'block' : 'none';
            nextButton.style.display = (currentStep === steps.length) ? 'none' : 'block';
        });
    };

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

    // Navbar Scroll Effect
    document.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        header.classList.toggle("scrolled", window.scrollY > 1);
    });

    // Calendar Click Event
    document.querySelectorAll(".calendar-grid .date").forEach(date => {
        date.addEventListener("click", () => {
            document.querySelectorAll(".calendar-grid .date.selected").forEach(d => d.classList.remove("selected"));
            date.classList.add("selected");
        });
    });

    // Swiper Initialization
    new Swiper(".swiper.footer-slider", {
        slidesPerView: 5,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
