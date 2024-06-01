document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like-button');
    
    likeButton.addEventListener('click', () => {
        const numberOfLikes = Math.floor(Math.random() * 10) + 1; // Random number from 1 to 5
        for (let i = 0; i < numberOfLikes; i++) {
            createFloatingLike(likeButton);
        }
    });

    function createFloatingLike(button) {
        const like = document.createElement('img');
        like.src = 'assets/images/thumbsup.png'; // Use the new thumbs-up image
        like.className = 'floating-like';
        
        document.body.appendChild(like);
        
        const rect = button.getBoundingClientRect();
        like.style.left = `${rect.left + window.scrollX + button.clientWidth / 2}px`;
        like.style.top = `${rect.top + window.scrollY}px`;
        
        // Random size for the thumbs-up image
        const randomSize = Math.random() + 1; // Size between 0.5 and 1.0 of the original size
        like.style.transform = `scale(${randomSize})`;
        
        // Random direction for the thumbs-up image
        const angle = Math.random() * 2 * Math.PI; // Random angle in radians
        const x = Math.cos(angle) * 400; // X-axis movement
        const y = Math.sin(angle) * 500 - 100; // Y-axis movement (negative to go upwards)
        
        gsap.to(like, {
            duration: 2,
            x: x,
            y: y,
            opacity: 0,
            onComplete: () => {
                like.remove();
            }
        });
    }
});
