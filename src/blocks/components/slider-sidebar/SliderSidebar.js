import SliderBase from "../../../js/classes/SliderBase";

class SliderSidebar extends SliderBase {
    bindOptions(...options) {
        super.bindOptions(...options, {
            nextArrow: "<div class=\"slider-button next\"></div>",
            prevArrow: "<div class=\"slider-button prev\"></div>",
        });
    }
}

export {SliderSidebar};