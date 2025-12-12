document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        post.style.border = '3px solid #F4C314'; 
        
        const postTitle = post.querySelector('h2');
        if (postTitle) {
            postTitle.style.marginBottom = '10px';
        }
    });

    const mainContainer = document.querySelector('main');
    
    if (mainContainer) {
        const alertBox = document.createElement('div');
        alertBox.classList.add('container');

        alertBox.style.marginTop = '30px';
        alertBox.style.padding = '20px';
        alertBox.style.textAlign = 'center';
        
        alertBox.innerHTML = `
            <h3 style="color: #F4C314;">Вітаємо на Ale&Scale!</h3>
            <p>Дякуємо, що завітали.</p>
        `;
        
        mainContainer.append(alertBox);
    }

    const aboutSection = document.querySelector('.about-us');
    
    if (aboutSection) {
        const textParagraph = aboutSection.querySelector('p');
        textParagraph.style.display = 'none';
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Показати більше';
        
        toggleBtn.style.backgroundColor = 'transparent';
        toggleBtn.style.color = 'inherit'; 
        toggleBtn.style.border = '2px solid #F4C314';
        toggleBtn.style.padding = '10px 20px';
        toggleBtn.style.marginTop = '15px';
        toggleBtn.style.cursor = 'pointer';
        toggleBtn.style.fontWeight = 'bold';

        aboutSection.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', () => {
            if (textParagraph.style.display === 'none') {
                textParagraph.style.display = 'block';
                toggleBtn.textContent = 'Згорнути';
            } else {
                textParagraph.style.display = 'none';
                toggleBtn.textContent = 'Показати більше';
            }
        });
    }
});