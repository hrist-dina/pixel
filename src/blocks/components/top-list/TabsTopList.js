import {TabBase} from "../../../js/classes/TabBase";
import {SliderTopList} from "%components%/top-list/SliderTopList";

export class TabsTopList  extends TabBase {

    eventAfterActive(elem) {
        let slider = elem.find('.slick-initialized');
        if (slider.length) {
            slider.slick('unslick');
            new SliderTopList(slider);
        }
    }
}