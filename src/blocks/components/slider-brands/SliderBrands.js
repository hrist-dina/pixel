import SliderBase from "../../../js/classes/SliderBase";

class SliderBrands extends SliderBase {
    bindOptions(...options) {
        super.bindOptions(...options, {
            nextArrow: "<div class=\"slider-button next\"></div>",
            prevArrow: "<div class=\"slider-button prev\"></div>",
            dots: false,
            slidesToShow: 2,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    }
                }
            ]
        });
    }
}

export {SliderBrands};