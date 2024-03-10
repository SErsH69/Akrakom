import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
// import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import SearchPage from '../blocks/modules/search_page/search_page.js';
import MainFirst from '../blocks/modules/main_first/main_first.js';
import MainFirstIn from '../blocks/modules/main_first_in/main_first_in.js';
import MainCat from '../blocks/modules/main_cat/main_cat.js';
import MainProd from '../blocks/modules/main_prod/main_prod.js';
import MainTabs from '../blocks/modules/main_tabs/main_tabs.js';
import Footer from '../blocks/modules/footer/footer.js';
import Modals from '../blocks/modules/modals/modals.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            window: window.innerWidth
        },
        header: new Header({
            isMobileMenuOpened: false,
        }),
        searchPage: new SearchPage(),
        mainFirst: new MainFirst(),
        mainFirstIn: new MainFirstIn(),
        mainCat: new MainCat(),
        mainProd: new MainProd(),
        mainTabs: new MainTabs(),
        footer: new Footer(),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        })
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.header.init();
        this.searchPage.init();
        this.mainFirst.init();
        this.mainFirstIn.init();
        this.mainCat.init();
        this.mainProd.init();
        this.mainTabs.init();
        this.footer.init();
        this.modals.init();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        }
    },
});