import $ from "jquery";
import Inputmask from "inputmask";

export class InputMask {
    constructor(selector = '.js-input-mask') {
        this.selector = $(selector);
    }

    phone() {
        let options = {
            mask: '+7(999)999-99-99',
            showMaskOnHover: false
        };
        let im = new Inputmask(options);
        im.mask(this.selector);
    }
}