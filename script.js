/* ============================================================
   WINWARD WEALTH SYSTEMS - MAIN SCRIPT
   ============================================================ */

// 1. MOBILE MENU (HAMBURGER) LOGIC
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    const bars = hamburger.querySelectorAll('.bar');
    // Simple transform for hamburger to X animation
    if (navMenu.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// 2. SCROLL SPY (ACTIVE NAVIGATION LINKS)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // Adjustment for sticky header
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


// 3. SERVICES CAROUSEL LOGIC
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (track && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: 350, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -350, behavior: 'smooth' });
    });
}


// 4. MULTI-STEP SIGN UP FORM LOGIC
// This handles the transition between Step 1, 2, and 3
let currentStep = 1;
const totalSteps = 3;
const nextStepBtn = document.querySelector('.btn-form-action-next');
const stepNodes = document.querySelectorAll('.circle-step-node');
const signupForm = document.getElementById('embeddedSignupForm');

// Sample content for different steps (You can expand this to change input fields)
const formLabels = [
    { label1: "First Name", label2: "Last Name", btnText: "Next" }, // Step 1
    { label1: "Mailing Address", label2: "City", btnText: "Next" },  // Step 2
    { label1: "Company Name", label2: "Job Title", btnText: "Submit" } // Step 3
];

if (nextStepBtn) {
    nextStepBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            currentStep++;
            updateFormStep();
        } else {
            alert("Thank you! Your information has been submitted.");
            // Reset form for demo purposes
            currentStep = 1;
            updateFormStep();
            signupForm.reset();
        }
    });
}

function updateFormStep() {
    // Update Circle Indicators
    stepNodes.forEach((node, index) => {
        if (index < currentStep) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });

    // Update Input Labels based on current step
    const labels = signupForm.querySelectorAll('.signup-input-col label');
    const inputs = signupForm.querySelectorAll('.signup-input-col input');
    
    // Note: This logic assumes you want to swap fields dynamically.
    // In a real app, you might hide/show different <div> containers instead.
    if (currentStep === 2) {
        labels[1].innerText = "Address Line 1";
        labels[2].innerText = "City/State";
        nextStepBtn.innerText = "Next";
    } else if (currentStep === 3) {
        labels[1].innerText = "Preferred Service";
        labels[2].innerText = "Additional Notes";
        nextStepBtn.innerText = "Submit Registration";
    } else {
        labels[1].innerText = "First Name";
        labels[2].innerText = "Last Name";
        nextStepBtn.innerText = "Next";
    }
}

// 5. FOOTER FEEDBACK FORM SUBMISSION
const feedbackForm = document.querySelector('.footer-feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for your feedback!");
        feedbackForm.reset();
    });
}
function nextStep(stepNumber) {
    // 1. Hide all form steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.style.display = 'none';
    });

    // 2. Show the target step
    document.getElementById('step-' + stepNumber).style.display = 'block';

    // 3. Update Step Indicator Circles
    document.querySelectorAll('.circle-step-node').forEach((node, index) => {
        if (index < stepNumber) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });
}
function toggleSignup() {
    const signupSection = document.getElementById('signup');
    
    // Check if the section is currently hidden
    if (signupSection.style.display === "none" || signupSection.style.display === "") {
        // Show the section
        signupSection.style.display = "block";
        signupSection.classList.add('show-signup');
        
        // Scroll to the section smoothly
        signupSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Optional: Hide it again if they click "Sign Up" while it's already open
        signupSection.style.display = "none";
        signupSection.classList.remove('show-signup');
    }
}

// Logic for the 1-2-3 Functional Steps
function nextStep(stepNumber) {
    // Hide all form steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.style.display = 'none';
    });

    // Show the specific step
    const targetStep = document.getElementById('step-' + stepNumber);
    if(targetStep) {
        targetStep.style.display = 'block';
    }

    // Update the 1-2-3 Circle Indicators
    document.querySelectorAll('.circle-step-node').forEach((node, index) => {
        if (index < stepNumber) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });
}