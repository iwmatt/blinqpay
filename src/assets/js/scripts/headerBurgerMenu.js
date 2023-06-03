const headerBurgerMenu = () => {
    const button = document.getElementsByClassName('header-gamburger__menu-button')[0];
    const content = document.getElementsByClassName('header-gamburger__menu-wrapper')[0];

    if (!button || !content) {
        return
    }

    button.addEventListener('click', () => {
        content.classList.toggle('header-gamburger__menu-wrapper--active');
    })
}