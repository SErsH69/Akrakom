const SearchPage = class SearchPage {
    constructor(){}
    toggleSearch() {
        document.addEventListener("DOMContentLoaded", function() {
            const blocks = document.querySelectorAll('.search_page__block');
            const showMoreButton = document.querySelector('.search_page__more');
    
            function hideBlocks() {
                for (let i = 5; i < blocks.length; i++) {
                    blocks[i].classList.add('hide');
                }
            }
    
            function showMoreBlocks() {
                let hiddenBlocks = document.querySelectorAll('.search_page__block.hide');
                for (let i = 0; i < 5 && i < hiddenBlocks.length; i++) {
                    hiddenBlocks[i].classList.remove('hide');
                }
                if (hiddenBlocks.length <= 5) {
                    showMoreButton.style.display = 'none';
                }
            }
    
            hideBlocks(); // Вызываем функцию для скрытия лишних блоков при загрузке страницы
            showMoreButton.addEventListener('click', showMoreBlocks);
        });
    }
    init() {
        this.toggleSearch();
    }
}

export default SearchPage;