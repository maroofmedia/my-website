<script>
        // Hide header on scroll down, show on scroll up
        let lastScroll = 0;
        const header = document.getElementById('mainHeader');
        const threshold = 100; // Minimum scroll distance before hiding/showing the header

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > threshold) {
                // Scrolling down: hide the header
                header.classList.add('hidden');
            } else {
                // Scrolling up: show the header
                header.classList.remove('hidden');
            }

            // Update the last scroll position
            lastScroll = currentScroll;
        });
    </script>
