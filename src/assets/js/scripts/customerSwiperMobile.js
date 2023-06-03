const customerSwiperMobile = () => {
    if (Swiper && document.getElementsByClassName('customer__swiper')) {
        const CustomerSwiper = new Swiper('.customer__swiper', {
            slidesPerView: 1,
            pagination: {
                el: '.customer-swiper___pagination',
                clickable: true,
            },
            allowTouchMove: true,
            spaceBetween: 2000,
            speed: 700,
        })
    }
}