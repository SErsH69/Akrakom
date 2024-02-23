const Header = class Header {
    constructor({isMobileMenuOpened}){
        this.isMobileMenuOpened = false;
    }
    toggleSearch() {
        document.addEventListener('DOMContentLoaded', () => {
            // Находим все элементы кнопок поиска и тела поиска
            var searchBtns = document.querySelectorAll('.header__search_mob--btn');
        
            // Добавляем обработчик события для каждой кнопки поиска
            searchBtns.forEach(function(searchBtn) {
                searchBtn.addEventListener('click', function() {
                    // Находим ближайший родительский контейнер .header__top
                    var headerTop = this.closest('.header__top');
        
                    // Если контейнер найден, ищем тело поиска внутри него
                    if (headerTop) {
                        var currentSearchBody = headerTop.querySelector('.header__search_mob--bodys');
                        
                        // Переключаем класс isActive только для текущего тела поиска
                        if (currentSearchBody) {
                            currentSearchBody.classList.toggle('isActive');
                        }
                    }
                });
            });
        
            // Находим все элементы кнопок закрытия поиска
            var searchCloses = document.querySelectorAll('.header__search_mob--close');
        
            // Добавляем обработчик события для каждой кнопки закрытия поиска
            searchCloses.forEach(function(searchClose) {
                searchClose.addEventListener('click', function() {
                    // Находим ближайший родительский контейнер .header__top
                    var headerTop = this.closest('.header__top');
        
                    // Если контейнер найден, ищем тело поиска внутри него
                    if (headerTop) {
                        var currentSearchBody = headerTop.querySelector('.header__search_mob--bodys');
                        
                        // Убираем класс isActive только для текущего тела поиска
                        if (currentSearchBody) {
                            currentSearchBody.classList.remove('isActive');
                        }
                    }
                });
            });
        });
    }
    toogleMobileMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
    }
    closeMobileMenu() {
        this.isMobileMenuOpened = false;
    }
    setEventListener() {
        document.addEventListener('click', (event) => {
            if (event.target.closest('.header__burger--body') || event.target.closest('.header__burger')) return;
            this.closeMobileMenu();
        }) 
    }
    init() {
        this.setEventListener();
        this.toggleSearch();
    }
}

export default Header;