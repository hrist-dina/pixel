import $ from "jquery";
import {SliderMain} from "%components%/slider-main/SliderMain";
import {TabBase} from "../classes/TabBase";
import {SliderSidebar} from "%components%/slider-sidebar/SliderSidebar";
import {SliderBrands} from "%components%/slider-brands/SliderBrands";
import {News} from "%components%/news/News";
import {Product} from "%components%/product/Product";
import {Map} from "%components%/map/Map";
import {Field} from "../classes/Field";
import {Location} from "%components%/location/Location";
import {Search} from "%components%/search/Search";

$(document).ready(function () {
    new SliderMain('.js-slider-main');
    new SliderSidebar('.js-slider-sidebar');
    new SliderBrands('.js-slider-brands');
    new TabBase();
    new News();
    new Product();
    new Map();
    new Field();
    new Location();
    new Search();
});