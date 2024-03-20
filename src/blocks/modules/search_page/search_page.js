const SearchPage = class SearchPage {
    constructor(){}
    toggleSearch() {
        document.addEventListener("DOMContentLoaded", function() {
            const blocks = document.querySelectorAll('.search_page__block');
            const showMoreButton = document.querySelector('.search_page__more');
    
            if (showMoreButton) {
                function hideBlocks() {
                    for (let i = 5; i < blocks.length; i++) {
                        blocks[i].classList.add('hide');
                    }
                }
                let hiddenBlocks1 = document.querySelectorAll('.search_page__block');
                if (hiddenBlocks1.length <= 5) {
                    showMoreButton.style.display = 'none';
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
        
                hideBlocks();
                showMoreButton.addEventListener('click', showMoreBlocks);
            }
        });
    }
    init() {
        this.toggleSearch();
    }
}

export default SearchPage;
