export default () => {
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-list'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    })
}