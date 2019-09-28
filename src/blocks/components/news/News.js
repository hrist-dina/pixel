import $ from "jquery";

export class News {
    constructor(selector = '.js-news') {

        this.category = `${selector}-category`;
        this.categoryOpen = `${this.category}-open`;

        this.init();
    }

    init () {
        this.onClickCategory();
    }

    onClickCategory() {
        $(document).mouseup((e) => {
            let category = $(this.category);
            if (!category.is(e.target)
                && category.has(e.target).length === 0) {
                category.removeClass('active');
            }
        });

        $(this.categoryOpen).on('click', () => {
            $(this.category).toggleClass('active');
        });
    }
}