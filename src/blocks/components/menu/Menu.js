import $ from "jquery";

export class Menu {
    constructor(selector = '.js-mobile-menu') {

        this.menu = selector;
        this.menuList = `${selector}-list`;

        this.init();
    }

    init() {
        this.onClick();
    }

    isMobile() {
        return $(window).width() <= 767;
    }

    onClick() {
        if (this.isMobile()) {
            const self = this;
            $(this.menu).on('click', function (e) {
                console.log(e.currentTarget);
                console.log(e.target);
                console.log($(self.menuList)[0]);
                console.log($(e.target).parents(self.menuList)[0]);
                if ($(self.menuList)[0] === $(e.target).parents(self.menuList)[0]) return;

                $(this).toggleClass('active-mobile');
            });
        }
    }


}