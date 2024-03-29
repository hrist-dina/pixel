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
import {Menu} from "%components%/menu/Menu";
import {SliderTopList} from "%components%/top-list/SliderTopList";
import {TabsTopList} from "%components%/top-list/TabsTopList";
import {MobileMenu} from "%components%/mobile-menu/MobileMenu";
import {InputMask} from "../classes/InputMask";

$(document).ready(function () {
    new SliderMain('.js-slider-main');
    new SliderSidebar('.js-slider-sidebar');
    new SliderBrands('.js-slider-brands');
    new SliderTopList('.js-slider-top-list');
    new TabBase();
    new TabsTopList('.js-topList-tab');
    new News();
    new Product();
    new Field();
    new Location();
    new Search();
    new Menu();
    new MobileMenu();
    new InputMask().phone();
    if (window.mapContacts) {
        window.mapContacts.forEach(function (item) {
            new Map('map', item);
        });
    } else {
        new Map();
    }
});