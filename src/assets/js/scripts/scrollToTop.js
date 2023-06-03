const scrollToTop = () => {
    const button = document.getElementById('scroll-to-top');
    const finish = document.querySelector('body');
    const header = document.getElementsByClassName('header')[0];

    button.addEventListener('click', () => {        
        finish.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }
    
    // Если header в зоне видимости то кнопку скрываем, если нет то показываем.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.isIntersecting ? button.style.display = 'none' : button.style.display = 'flex';
        });
    }, observerOptions);
    
    if (header) {
        observer.observe(header);
    }
}