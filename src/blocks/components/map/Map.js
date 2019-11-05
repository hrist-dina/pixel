import $ from "jquery";

export class Map {
    constructor(id = "map", options = {}) {
        this.map = id;
        this.idZoomIn = "zoom-in";
        this.idZoomOut = "zoom-out";

        this.options = options;

        this.init();
    }

    init() {
        this.initMap();
    }

    isMobile() {
        return $(window).width() <= 992;
    }

    zoomTemplate() {
        return "<div class='map-zoom'>" +
            `<div id='${this.idZoomIn}' class='plus'></div>` +
            `<div id='${this.idZoomOut}' class='minus'></div>` +
            "</div>";
    }

    get zoom() {
        return this.options && this.options.zoom ? this.options.zoom : 17;
    }

    get location() {
        return  this.options && this.options.location ? this.options.location : [55.03937756965834, 82.91865999999987];
    }

    get center() {
        return  this.options && this.options.center ? this.options.center : [55.03937756965834, 82.91865999999987];
    }

    get hint() {
        return  this.options && this.options.hint ? this.options.hint : "г.Новосибирск, Красный проспект, 62";
    }

    controlOptions() {
        return {
            position: {
                top: this.isMobile() ? 25 : 45,
                right: this.isMobile() ? 15 : 35
            },
        };
    }

    initMap() {
        ymaps.ready().then(() => {
            let map = new ymaps.Map(this.map, {
                center: this.center,
                zoom: this.zoom,
                controls: []
            });

            map.behaviors.disable('scrollZoom');

            let placemark = new ymaps.Placemark(this.location, {
                hintContent: this.hint,
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: "default#image",
                // Своё изображение иконки метки.
                iconImageHref: $('#'+this.map).attr('data-img')?$('#'+this.map).attr('data-img'):"img/map/placemark.svg",
                // Размеры метки.
                iconImageSize: [43, 53],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -53]
            });
            map.geoObjects.add(placemark);

            const self = this;
            // Создадим пользовательский макет ползунка масштаба.
            let ZoomLayout =
                ymaps.templateLayoutFactory.createClass(
                    this.zoomTemplate(),
                    {
                        // Переопределяем методы макета, чтобы выполнять дополнительные действия
                        // при построении и очистке макета.
                        build: function () {
                            // Вызываем родительский метод build.
                            ZoomLayout.superclass.build.call(this);

                            // Привязываем функции-обработчики к контексту и сохраняем ссылки
                            // на них, чтобы потом отписаться от событий.
                            this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                            this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                            // Начинаем слушать клики на кнопках макета.
                            $(`#${self.idZoomIn}`).bind("click", this.zoomInCallback);
                            $(`#${self.idZoomOut}`).bind("click", this.zoomOutCallback);
                        },

                        clear: function () {
                            // Снимаем обработчики кликов.
                            $(`#${self.idZoomIn}`).unbind("click", this.zoomInCallback);
                            $(`#${self.idZoomOut}`).unbind("click", this.zoomOutCallback);

                            // Вызываем родительский метод clear.
                            ZoomLayout.superclass.clear.call(this);
                        },

                        zoomIn: function () {
                            var map = this.getData().control.getMap();
                            map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
                        },

                        zoomOut: function () {
                            var map = this.getData().control.getMap();
                            map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
                        }
                    }
                ),
                zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});

            map.controls.add(zoomControl, this.controlOptions());

        });
    }
}