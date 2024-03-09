import $ from 'jquery';
import 'slick-carousel';

import lightGallery from 'lightgallery';


const MainFirstIn = class MainFirstIn {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_main_first_in').slick({
                slidesToShow: 5,
                arrows: true,
                dots: false,
                infinite: false,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            arrows: false,
                            dots: true,
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 680,
                        settings: {
                            arrows: false,
                            dots: true,
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            arrows: false,
                            dots: true,
                            slidesToShow: 4
                        }
                    }
                ]
            });
            lightGallery(document.getElementById('lightgallery'), {
                speed: 500,
                selector: '.main_first_in__item img'
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainFirstIn;