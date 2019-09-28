import $ from "jquery";
import {SliderMain} from "%components%/slider-main/SliderMain";
import {TabBase} from "../classes/TabBase";
import {SliderSidebar} from "%components%/slider-sidebar/SliderSidebar";
import {SliderBrands} from "%components%/slider-brands/SliderBrands";
import {News} from "%components%/news/News";

$(document).ready(function () {
    new SliderMain('.js-slider-main');
    new SliderSidebar('.js-slider-sidebar');
    new SliderBrands('.js-slider-brands');
    new TabBase();
    new News();
});