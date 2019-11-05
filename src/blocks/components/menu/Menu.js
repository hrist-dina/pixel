import $ from "jquery";

export class Menu {
    constructor(selector = '.js-menu-catalog') {

        this.menu = selector;
        this.menuList = `${selector}-list`;
        this.menuBack = `${selector}-back`;

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
                if(self.isMobile()) {
                    e.preventDefault();
                }

                if (
                    $(self.menuList)[0] === $(e.target).parents(self.menuList)[0]
                    ||
                    $(self.menuList)[0] === $(e.target)[0]
                ) {
                    return;
                }
                $(this).toggleClass('active-mobile');
                $('html').toggleClass('o-hidden');
                $(this).parents('.header').toggleClass('fixed');

            });

            $(this.menuList + ' li').on('click', function () {
                let child = $(this).find('> ul')[0];
                if ($(this).hasClass('has-child') || child) {
                    $(child).addClass('active-mobile');
                    if (!$(child).find(self.menuBack)[0]) {
                        $(child).prepend($(`<div class="icon-back js-menu-catalog-back"></div>`));
                    }
                }
            });

            $(document).on('click', this.menuBack, function () {
                $(this).parent('.active-mobile').removeClass('active-mobile');
            });
        }
    }


}