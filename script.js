const button = document.getElementById('birthdayButton');
const message = document.getElementById('birthdayMessage');
const song = document.getElementById('birthdaySong');

button.addEventListener('click', () => {
    button.style.display = 'none';
    message.style.opacity = 1;
    song.play();
    createBalloons();
});

function createBalloons() {
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(balloon);

        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, 5000); // Adjust this time to match the float animation duration
    }, 274);
}