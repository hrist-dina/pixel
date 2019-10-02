import SliderBase from "../../../js/classes/SliderBase";

class SliderTopList extends SliderBase {
    bindOptions(...options) {
        super.bindOptions(...options, {
            nextArrow: "<div class=\"slider-button next\"></div>",
            prevArrow: "<div class=\"slider-button prev\"></div>",
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 993,
                    settings: "unslick"
                }]
        });
    }
}

export {SliderTopList};