const MainCat = class MainCat {
    constructor(){}
    toggleSearch() {
        document.addEventListener("DOMContentLoaded", function() {
            if (window.innerWidth <= 1023) {
                document.querySelector('.main_cat__text--l-side').addEventListener('click', function() {
                    document.querySelector('.main_cat__text').classList.toggle('isActive');
                });
            }
        });
    }
    init() {
        this.toggleSearch();
    }
}

export default MainCat;
