const MainTabs = class MainTabs {
    constructor(){}
    initTabs() {
        document.addEventListener('DOMContentLoaded', function() {
            var tabs = document.querySelectorAll('.main_tabs__tab');
            var contents = document.querySelectorAll('.main_tabs__content');
            var tabsContainer = document.querySelector('.main_tabs__tabs');
    
            let isShow = false; // Переменная для хранения состояния isShow
    
            tabs.forEach(function(tab, index) {
                tab.addEventListener('click', function() {
                    // Проверяем, имеет ли кликнутая вкладка класс isActive
                    var isActive = tab.classList.contains('isActive');
    
                    // Удаляем класс isActive у всех вкладок и их содержимого
                    tabs.forEach(function(tab) {
                        tab.classList.remove('isActive');
                    });
                    contents.forEach(function(content) {
                        content.classList.remove('isActive');
                    });
    
                    // Добавляем класс isActive только кликнутой вкладке и её содержимому
                    tab.classList.add('isActive');
                    contents[index].classList.add('isActive');
    
                    if (!isActive) {
                        // Если текущая вкладка не активна, то убираем класс isShow
                        isShow = false;
                    } else {
                        // Если текущая вкладка уже активна, то инвертируем состояние isShow
                        isShow = !isShow;
                    }
    
                    // Обновляем класс isShow в соответствии с состоянием
                    if (isShow) {
                        tabsContainer.classList.add('isShow');
                    } else {
                        tabsContainer.classList.remove('isShow');
                    }
                });
            });
        });
    }
    init() {
        this.initTabs();
    }
}

export default MainTabs;
