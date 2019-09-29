import $ from "jquery";
import {SliderMain} from "%components%/slider-main/SliderMain";
import {TabBase} from "../classes/TabBase";
import {SliderSidebar} from "%components%/slider-sidebar/SliderSidebar";
import {SliderBrands} from "%components%/slider-brands/SliderBrands";
import {News} from "%components%/news/News";
import {Product} from "%components%/product/Product";
import {Map} from "%components%/map/Map";

$(document).ready(function () {
    new SliderMain('.js-slider-main');
    new SliderSidebar('.js-slider-sidebar');
    new SliderBrands('.js-slider-brands');
    new TabBase();
    new News();
    new Product();
    new Map();

    $('.field input, .field textarea').focus(function(){
        $(this).parents('.field').addClass('focused');
    });

    $('.field input, .field textarea').blur(function(){
        let inputValue = $(this).val();
        if ( inputValue === "" ) {
            // $(this).removeClass('filled');
            $(this).parents('.field').removeClass('focused');
        } else {
            // $(this).addClass('filled');
        }
    });
});