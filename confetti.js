const colors = ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1b1", "#f9bec7"];
const confettiCount = 150;

for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDelay = Math.random() * 5 + "s";
    confetti.style.width = Math.random() * 10 + 5 + "px";
    confetti.style.height = confetti.style.width;
    document.body.appendChild(confetti);
}
