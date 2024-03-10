import lightGallery from 'lightgallery';


const MainProd = class MainProd {
    constructor(){}
    initGal() {
        document.addEventListener('DOMContentLoaded', () => {
            lightGallery(document.getElementById('lightgallery_ser'), {
                speed: 500,
                selector: 'div img'
            });
            if (window.innerWidth <= 1023) {
                document.querySelector('.main_prod__text--title').addEventListener('click', function() {
                    document.querySelector('.main_prod__text').classList.toggle('isActive');
                });
            }
        });
    }
    init() {
        this.initGal();
    }
}

export default MainProd;