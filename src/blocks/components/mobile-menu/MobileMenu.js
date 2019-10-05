import $ from "jquery";

export class MobileMenu {
    constructor(selector = '.js-mobile-menu') {
        this.menu = selector;
        this.open = `${selector}-open`;
        this.content = `${selector}-content`;
        this.list = `${selector}-list`;

        this.init();
    }

    init() {
        this.onClick();
    }

    onClick() {
        const self = this;
        $(this.open).on('click', function () {
            $(self.menu).toggleClass('active');
            $(self.content).fadeToggle(300);
            $(this).toggleClass('active');
            $(self.list).fadeToggle(300);
            $('html').toggleClass('o-hidden');
        });
    }
}