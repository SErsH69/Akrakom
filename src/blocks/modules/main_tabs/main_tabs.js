const MainTabs = class MainTabs {
    constructor(){}
    initTabs() {
        document.addEventListener('DOMContentLoaded', function() {
            var tabs = document.querySelectorAll('.main_tabs__tab');
            var contents = document.querySelectorAll('.main_tabs__content');
            var tabsContainer = document.querySelector('.main_tabs__tabs');
    
            tabs.forEach(function(tab, index) {
                tab.addEventListener('click', function() {
                    var isActive = tab.classList.contains('isActive');
    
                    tabs.forEach(function(tab) {
                        tab.classList.remove('isActive');
                    });
                    contents.forEach(function(content) {
                        content.classList.remove('isActive');
                    });
    
                    if (!isActive) {
                        tab.classList.add('isActive');
                        contents[index].classList.add('isActive');
                    }
                });
            });

            // Проверяем разрешение экрана при загрузке страницы
            if (window.innerWidth <= 1023) {
                // Переносим содержимое каждого таба под соответствующий таб
                tabs.forEach(function(tab, index) {
                    tab.appendChild(contents[index]);
                });
            }

            // Дополнительный код для переноса содержимого на мобильных устройствах
            window.addEventListener('resize', function() {
                // Проверяем разрешение экрана при изменении размера окна
                if (window.innerWidth <= 1023) {
                    tabs.forEach(function(tab, index) {
                        tab.appendChild(contents[index]);
                    });
                } else {
                    // Если разрешение экрана больше 1023, перемещаем содержимое обратно в исходное положение
                    contents.forEach(function(content) {
                        content.parentNode.appendChild(content);
                    });
                }
            });
        });
    }
    init() {
        this.initTabs();
    }
}

export default MainTabs;
