    <script>
        // Hide header on scroll
        let lastScroll = 0;
        const header = document.getElementById('mainHeader');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScroll = currentScroll;
        });
    </script>
