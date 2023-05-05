import { customerSwiperDesktop } from "./scripts/customerSwiperDesktop.js";
import { customerSwiperMobile } from "./scripts/customerSwiperMobile.js";
import { headerBurgerMenu } from "./scripts/headerBurgerMenu.js";
import { animations } from "./scripts/animations.js";
import { scrollToTop } from "./scripts/scrollToTop.js";


// Инициализация AOS анимаций.
animations();

// бургер меню
headerBurgerMenu();

// Свайпер 1 в секции Customers
customerSwiperDesktop();

// Свайпер 2 в секции Customers
customerSwiperMobile();

// Scroll to top
scrollToTop();