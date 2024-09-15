function explore() {
    window.location.href = "#video";
}

function discover() {
    window.open('https://nyuad.nyu.edu/en/about/nyuad-at-a-glance/the-campus/arts-center.html', '_blank');
}
function toggleTheme() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }
    updateParticlesTheme();
}

function updateParticlesTheme() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    const particlesBackgroundColor = isDarkMode ? "#121212" : "#ffffff"; // Background color based on theme
    const particlesColor = isDarkMode ? "#00abf0" : "#00557a"; // Particle color based on theme
    const lineLinkedColor = isDarkMode ? "#00abf0" : "#00557a"; // Line linking color

    particlesJS("particles-js", {
        particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: particlesColor }, // Update particle color based on theme
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: lineLinkedColor, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6 }
        },
        retina_detect: true,
        background: {
            color: {
                value: particlesBackgroundColor // Set background color dynamically
            }
        }
    });
}

window.onload = function () {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
    updateParticlesTheme(); // Ensure particles are updated with the right theme on load
};
