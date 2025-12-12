document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector('footer');
    if (footer) {
        const dateElement = document.createElement('p');
        dateElement.style.color = '#F4C314'; 
        dateElement.style.marginTop = '15px';
        dateElement.style.fontSize = '0.9rem';
        
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = `Поточна дата: ${today.toLocaleDateString('uk-UA', options)}`;
        
        footer.appendChild(dateElement);
    }

    const navMenu = document.querySelector('.nav-menu');

    if (navMenu) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
        }

        const themeBtn = document.createElement('button');
        
        if (document.body.classList.contains('light-theme')) {
            themeBtn.textContent = '☾ Dark Mode';
        } else {
            themeBtn.textContent = '☀ Light Mode';
        }

        themeBtn.classList.add('theme-toggle-btn');

        navMenu.appendChild(themeBtn);

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            
            const isLight = document.body.classList.contains('light-theme');

            if (isLight) {
                themeBtn.textContent = '☾ Dark Mode';
                localStorage.setItem('theme', 'light');
            } else {
                themeBtn.textContent = '☀ Light Mode';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('js-menu-highlight');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('js-menu-highlight');
        });
    });

    let currentZoom = 100; 

    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowUp') {
            event.preventDefault();
            currentZoom += 5;
            document.documentElement.style.fontSize = `${currentZoom}%`;
        }
        if (event.code === 'ArrowDown') {
            event.preventDefault();
            if (currentZoom > 50) {
                currentZoom -= 5;
                document.documentElement.style.fontSize = `${currentZoom}%`;
            }
        }
    });
});