import $ from "jquery";

export class Location {
    constructor(selector = '.js-location') {
        this.location = selector;
        this.link = `${selector}-link`;

        this.init();
    }

    init() {
        this.onClick();
    }

    onClick() {
        $(this.link).on('click', () => {
            $(this.location).toggleClass('active');
        });

        $(document).mouseup((e) => {
            let location = $(this.location);
            if (!location.is(e.target)
                && location.has(e.target).length === 0) {
                location.removeClass('active');
            }
        });
    }
}