import $ from "jquery";

export class Field {
    constructor() {
        this.init();
    }

    init() {
        this.focus();
        this.blur();
    }

    focus() {
        $('.field input, .field textarea').focus(function(){
            $(this).parents('.field').addClass('focused');
        });
    }

    blur() {
        $('.field input, .field textarea').blur(function(){
            let inputValue = $(this).val();
            if ( inputValue === "" ) {
                $(this).parents('.field').removeClass('focused');
            }
        });
    }
}