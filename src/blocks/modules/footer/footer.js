import $ from "jquery";

export class Footer {
    constructor(selector = '.js-footer') {
        this.title = `${selector}-title`;
        this.block = `${selector}-block`;

        this.init();
    }

    init() {
        this.onClickTitle();
    }

    onClickTitle() {
        const self = this;
        $(this.title).on('click', function () {
            let elem = $(this);
            elem.toggleClass('active');
            let block = elem.next(self.block);
            block.slideToggle().toggleClass('active');
        });
    }
}