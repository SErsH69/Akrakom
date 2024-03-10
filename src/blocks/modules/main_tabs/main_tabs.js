const MainTabs = class MainTabs {
    constructor(){}
    initTabs() {
        document.addEventListener('DOMContentLoaded', function() {
            var tabs = document.querySelectorAll('.main_tabs__tab');
            var contents = document.querySelectorAll('.main_tabs__content');
    
            tabs.forEach(function(tab, index) {
                tab.addEventListener('click', function() {
                    tabs.forEach(function(tab) {
                        tab.classList.remove('isActive');
                    });
                    contents.forEach(function(content) {
                        content.classList.remove('isActive');
                    });
    
                    tab.classList.add('isActive');
                    contents[index].classList.add('isActive');
                });
            });
        });
    }
    init() {
        this.initTabs();
    }
}

export default MainTabs;