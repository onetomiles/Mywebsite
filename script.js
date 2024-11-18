// script.js
// JavaScript code for interactive elements like hover effects, animations, modals, etc.

// Example: Hover effect
const experienceSection = document.getElementById('experience');
experienceSection.addEventListener('mouseover', () => {
    experienceSection.style.backgroundColor = '#f0f0f0';
});
experienceSection.addEventListener('mouseout', () => {
    experienceSection.style.backgroundColor = 'white';
});
