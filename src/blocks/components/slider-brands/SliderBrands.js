import SliderBase from "../../../js/classes/SliderBase";

class SliderBrands extends SliderBase {
    bindOptions(...options) {
        super.bindOptions(...options, {
            nextArrow: "<div class=\"slider-button next\"></div>",
            prevArrow: "<div class=\"slider-button prev\"></div>",
            dots: false,
            slidesToShow: 6,
        });
    }
}

export {SliderBrands};