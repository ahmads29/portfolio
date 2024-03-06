// animated background script

        const canvas = document.getElementById("bgCanvas");
        const ctx = canvas.getContext("2d");

        // Function to set canvas size
        function setCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // Set initial canvas size
        setCanvasSize();

        let particles = [];
        const maxParticles = 35; // Maximum number of particles

        // Function to create fixed number of particles
        function createParticles() {
            particles = []; // Clear the particles array before recreating
            for (let i = 0; i < maxParticles; i++) {
                const particle = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 5 + 1, // Random size between 1 and 6
                    speedX: Math.random() - 0.5, // Random horizontal speed (range: -0.5 to 0.5)
                    speedY: Math.random() - 0.5, // Random vertical speed (range: -0.5 to 0.5)
                    color: "#8080801f" // Lighter green with reduced opacity
                };
                particles.push(particle);
            }
        }

        // Function to update particle positions and draw them
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                
                // Update particle position
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap particles around the screen
                if (p.x > canvas.width) p.x = 0;
                if (p.x < 0) p.x = canvas.width;
                if (p.y > canvas.height) p.y = 0;
                if (p.y < 0) p.y = canvas.height;

                // Draw particle
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            updateParticles(); // Update particle properties
            draw();
        }

        // Update particle properties for animation
        function updateParticles() {
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                // Add some variation to particle speed
                p.speedX += (Math.random() - 0.5) * 0.1;
                p.speedY += (Math.random() - 0.5) * 0.1;
                // Limit particle speed
                p.speedX = Math.max(-1, Math.min(1, p.speedX));
                p.speedY = Math.max(-1, Math.min(1, p.speedY));
            }
        }

        // Call createParticles function to create particles immediately
        createParticles();

        // Start animation
        animate();

        // Event listener for window resize
        window.addEventListener('resize', function() {
            setCanvasSize();
            createParticles();
        });