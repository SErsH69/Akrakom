const Footer = class Footer {
    constructor(){}
    upButton() {
        document.addEventListener('DOMContentLoaded', function() {
            var upButton = document.querySelector('.footer__up');
        
            upButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
    }
    init() {
        this.upButton();
    }
}

export default Footer;