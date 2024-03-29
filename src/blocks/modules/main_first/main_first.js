import $ from 'jquery';
import 'slick-carousel';

import lightGallery from 'lightgallery';


const MainFirst = class MainFirst {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_main_first').slick({
                slidesToShow: 4,
                arrows: true,
                infinite: false,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 680,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
            lightGallery(document.getElementById('lightgallery'), {
                speed: 500,
                selector: '.main_first__item img'
            });
            lightGallery(document.getElementById('lightgallery2'), {
                speed: 500,
                selector: '.main_first__item img'
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainFirst;