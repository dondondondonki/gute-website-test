document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".icons a");

    icons.forEach(icon => {
        icon.addEventListener("click", () => {
            const sound = new Audio("sounds/click.mp3"); // Add sound file
            sound.play();
        });
    });
});
