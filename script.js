        // FAQ Toggle
        document.querySelectorAll('.faq-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const faqContent = button.nextElementSibling;
                const icon = button.querySelector('i');
                
                faqContent.classList.toggle('hidden');
                icon.style.transform = faqContent.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Logo scroll to home
        function scrollToSection(sectionId) {
            const targetElement = document.querySelector(sectionId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }

        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const hamburgerIcon = document.querySelector('.hamburger-icon');

        function toggleMobileMenu() {
            mobileMenu.classList.toggle('open');
            hamburgerIcon.classList.toggle('open');
        }

        hamburger.addEventListener('click', toggleMobileMenu);