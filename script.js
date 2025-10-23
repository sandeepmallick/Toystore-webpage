        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });

        document.addEventListener('DOMContentLoaded', function() {
            const addToCartButtons = document.querySelectorAll('.btn');
            addToCartButtons.forEach(button => {
                if (button.textContent === 'Add to Cart') {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        alert('Item added to cart!');
                    });
                }
            });
        });