import $ from "jquery";

export class Product {
    constructor(selector = '.js-product') {
        this.selector = selector;

        this.view = `${selector}-view`;
        this.viewText = `${this.view}-text`;
        this.viewList = `${this.view}-list`;
        this.viewTile = `${this.view}-tile`;

        this.productList = `${selector}-list`;

        this.init();
    }

    init() {
        // this.onClickView();
    }

    onClickView() {
        let view;
        const active = 'ui-state-active';
        if ($(this.view).length) {
            view = $(this.view);
        } else {
            view = $('.views');
        }

        const types = ['cards', 'list', 'text'];

        if (view) {
            const self = this;
            let links = view.children('a');
            links.on('click', function (e) {
                e.preventDefault();
                let elem = $(this);
                links.removeClass(active);
                elem.addClass(active);

                types.forEach((item) => {
                    $(self.productList).removeClass(item);
                });

                if (elem.hasClass('tile')) {
                    $(self.productList).addClass('cards');
                }
                if (elem.hasClass('list')) {
                    $(self.productList).addClass('list');
                }
                if (elem.hasClass('text')) {
                    $(self.productList).addClass('text');
                }
            });
        }
    }
}