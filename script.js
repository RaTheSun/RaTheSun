document.addEventListener('DOMContentLoaded', function () {
    // Sparkle effect
    const icons = document.querySelectorAll('.icon-link');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => createSparkles(icon));
    });

    function createSparkles(icon) {
        for (let i = 0; i < 4; i++) { // Adjust number of sparkles as needed
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            icon.appendChild(sparkle);

            const sparkleSize = Math.random() * 5 + 3;
            gsap.set(sparkle, {
                x: Math.random() * icon.offsetWidth,
                y: Math.random() * icon.offsetHeight,
                width: sparkleSize,
                height: sparkleSize,
                opacity: 1
            });

            gsap.to(sparkle, {
                x: `+=${(Math.random() - 0.5) * 100}`,
                y: `+=${(Math.random() - 0.8) * 100}`,
                opacity: 0.8,
                duration: 2,
                ease: "power1.out",
                onComplete: () => sparkle.remove()
            });
        }
    }

    // Copy to clipboard and floating thumbs-up animation
    window.copyToClipboard = function (text, button) {
        console.log('copyToClipboard called');
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
            createFloatingLikes(button);
            button.textContent = 'COPIED'; // Change button text to 'Copied'
            setTimeout(() => {
                button.textContent = 'COPY'; // Change back to 'Copy' after 2 seconds
            }, 20000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    function createFloatingLikes(button) {
        const numberOfLikes = Math.floor(Math.random() * 15) + 1; // Random number between 1 and 10
        for (let i = 0; i < numberOfLikes; i++) {
            createFloatingLike(button);
        }
    }

    function createFloatingLike(button) {
        console.log('createFloatingLike called');
        console.log(button);
        const like = document.createElement('img');
        like.src = 'assets/images/thumbs-up.png'; // Use the new thumbs-up image
        like.className = 'floating-like';
        
        document.body.appendChild(like);
        
        const rect = button.getBoundingClientRect();
        like.style.left = `${rect.left + window.scrollX + button.clientWidth / 2}px`;
        like.style.top = `${rect.top + window.scrollY}px`;
        
        // Random size for the thumbs-up image
        const randomSize = Math.random() * 5; // Size between 0.5 and 1.5 of the original size
        like.style.transform = `scale(${randomSize})`;
        
        // Random direction for the thumbs-up image
        const angle = Math.random() * 2 * Math.PI; // Random angle in radians
        const x = Math.cos(angle) * 500; // X-axis movement
        const y = Math.sin(angle) * 500; // Y-axis movement (negative to go upwards)
        
        gsap.to(like, {
            duration: 8,
            x: x,
            y: y,
            opacity: 0,
            onComplete: () => {
                like.remove();
            }
        });
    }
});
