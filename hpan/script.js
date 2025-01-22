// Play music
document.getElementById('playMusic').addEventListener('click', () => {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
        alert('Music is now playing! 🎶');
    } else {
        music.pause();
        alert('Music has been paused! 🎵');
    }
});

// Show fireworks and balloons
document.getElementById('showFireworks').addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        document.body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 5000);
    }
    alert('Fireworks and balloons released! 🎆🎈');
});

// Go to memories page
document.getElementById('nextPage').addEventListener('click', () => {
    window.location.href = 'memories';
});


// Fireworks effect
    document.getElementById('triggerFireworks').addEventListener('click', function () {
        for (let i = 0; i < 10; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.top = `${Math.random() * 50}%`;
            document.body.appendChild(firework);

            // Remove firework after animation
            setTimeout(() => {
                firework.remove();
            }, 1500);
        }
    });

    // Heart effect
    document.getElementById('triggerHeartEffect').addEventListener('click', function () {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.fontSize = '50px';
        heart.style.color = '#ff6f61';
        heart.style.animation = 'scaleHeart 1s infinite';

        heart.innerText = '❤️';
        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 1000);
    });

    // Heart animation
    @keyframes scaleHeart {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }

        50% {
            transform: translate(-50%, -50%) scale(1.5);
        }

        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }