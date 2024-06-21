document.addEventListener('DOMContentLoaded', () => {
    // Toggle visibility of sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const heading = section.querySelector('h2');
        heading.addEventListener('click', () => {
            section.querySelector('.content').classList.toggle('collapsed');
        });
    });

    // Add tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', () => {
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltip-text';
            tooltipText.innerText = tooltip.getAttribute('data-tooltip');
            tooltip.appendChild(tooltipText);
        });
        tooltip.addEventListener('mouseleave', () => {
            const tooltipText = tooltip.querySelector('.tooltip-text');
            if (tooltipText) {
                tooltipText.remove();
            }
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hover effect to increase text size
    const hoverText = document.querySelectorAll('p, h2, h3, li');
    hoverText.forEach(text => {
        text.addEventListener('mouseenter', () => {
            text.style.fontSize = '1.2em';
        });
        text.addEventListener('mouseleave', () => {
            text.style.fontSize = '';
        });
    });

    // Interactive boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)';
            box.style.transition = 'transform 0.2s';
        });
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)';
        });
    });

    // Popup functionality
    const popup = document.getElementById("resultPopup");
    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});

function submitQuiz() {
    const answers = {
        q1: "CPU is responsible for executing instructions and processing data.",
        q2: "RAM is used for storing data that is currently being processed.",
        q3: "The motherboard is the main circuit board that allows communication between components.",
        q4: "The operating system manages hardware resources and provides services for programs.",
        q5: "A network card enables a computer to connect to a network."
    };

    let score = 0;
    Object.keys(answers).forEach(key => {
        const userAnswer = document.getElementById(key).value.toLowerCase();
        if (userAnswer.includes(answers[key].toLowerCase())) {
            score += 1;
        }
    });

    const percentage = (score / Object.keys(answers).length) * 100;
    const resultText = `You scored ${score} out of 5 (${percentage}%).`;

    const resultPopup = document.getElementById('resultPopup');
    const resultTextElement = document.getElementById('resultText');
    resultTextElement.innerText = resultText;
    resultPopup.style.display = "block";
}
