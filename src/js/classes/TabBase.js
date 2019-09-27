import $ from "jquery";

export class TabBase {
    constructor(selector = '.js-tab') {
        this.tabList = $(`${selector}-list`).children();
        this.tabContent = $(`${selector}-content`).children();

        this.init();
    }

    init() {
        this.onClick();
    }

    onClick() {
        const self = this;
        this.tabList.on('click', function () {
            self.tabList.removeClass('active');
            const tab = $(this);
            tab.addClass('active');
            const dataTab = tab.data('tab');
            self.tabContent.map(function (key, item) {
                let elem = $(item);
                if (elem.data('tab-content') === dataTab) {
                    elem.addClass('active');
                } else {
                    elem.removeClass('active');
                }
            });
        });
    }
}