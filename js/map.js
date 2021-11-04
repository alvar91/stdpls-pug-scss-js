const contact = document.querySelector(".contact");

let shopList = [
  {
    name: "SitDownPls на Солянке",
    adress: "м. Китай-город, ул. Солянка, д.24",
    coordinates: [55.750651875191934, 37.64164806745906],
  },
  {
    name: "SitDownPls на Покровке",
    adress: "м. Курская, ул. Покровка, д.14",
    coordinates: [55.759091068985285, 37.64497999999997],
  },
];

if (contact) {
  let placemarkCollections = {};
  let placemarkList = {};
  let map = "";
  let shopListUl = document.querySelector(".contact-shop__list");

  for (let i = 0; i < shopList.length; i++) {
    shopListUl.innerHTML += `<li class="contact-shop__item" value="${i}">
        <h5 class="contact-shop__item-title">Москва, ${shopList[i].name}</h5>
        <p class="contact-shop__descr">${shopList[i].adress}</p>
      </li>`;
  }

  ymaps.ready(init);
  function init() {
    map = new ymaps.Map("map", {
      center: [55.75, 37.62],
      zoom: 14,
      controls: [],
    });

    for (let i = 0; i < shopList.length; i++) {
      let cityCollection = new ymaps.GeoObjectCollection();

      let shopInfo = shopList[i];

      let shopsBalloon = ymaps.templateLayoutFactory.createClass(
        `<div class="balloon">
          <button class="balloon__close btn-reset"></button>
          <div class="balloon__arrow"></div>
          <div class="balloon__inner">
            <div class="balloon__header">
              <h5 class="balloon__title">${shopList[i].name}</h5>
              <p class="balloon__descr">${shopList[i].adress}</p>
              <a class="balloon__phone" href="tel:+74958854547">+7 (495) 885-45-47</a>
            </div>
            <div class="balloon__body">
              <p class="balloon__descr">
                <span class="baloon__subtitle">Часы работы:</span> с 10:00 до 21:00
              </p>
            </div>
            <div class="balloon__footer">
              <p class="balloon__descr mb-0">
                <span class="baloon__subtitle">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p>
            </div>
          </div>
        </div>`,
        {
          build: function () {
            this.constructor.superclass.build.call(this);
            this.element = $(".balloon", this.getParentElement());
            this.applyElementOffset();
            this.element
              .find(".balloon__close")
              .on("click", $.proxy(this.onCloseClick, this));
          },
          clear: function () {
            this.element.find(".balloon__close").off("click");
            this.constructor.superclass.clear.call(this);
          },
          onSublayoutSizeChange: function () {
            MyBalloonLayout.superclass.onSublayoutSizeChange.apply(
              this,
              arguments
            );

            if (!this._isElement(this.element)) {
              return;
            }

            this.applyElementOffset();
            this.events.fire("shapechange");
          },
          applyElementOffset: function () {
            this.element.css({
              left: -(this.element[0].offsetWidth / 2),
              top: -(
                this.element[0].offsetHeight +
                this.element.find(".balloon__arrow")[0].offsetHeight
              ),
            });
          },
          onCloseClick: function (e) {
            e.preventDefault();
            this.events.fire("userclose");
          },
          getShape: function () {
            if (!this._isElement(this.element)) {
              return MyBalloonLayout.superclass.getShape.call(this);
            }
            let position = this.element.position();

            return new ymaps.shape.Rectangle(
              new ymaps.geometry.pixel.Rectangle([
                [position.left, position.top],
                [
                  position.left + this.element[0].offsetWidth,
                  position.top +
                    this.element[0].offsetHeight +
                    this.element.find(".balloon__arrow")[0].offsetHeight,
                ],
              ])
            );
          },

          _isElement: function (element) {
            return element && element[0] && element.find(".balloon__arrow")[0];
          },
        }
      );

      let shopPlacemark = new ymaps.Placemark(
        shopInfo.coordinates,
        {},
        {
          balloonLayout: shopsBalloon,
          balloonPanelMaxMapArea: 0,
          iconLayout: "default#image",
          iconImageHref: "images/map-icon.svg",
          iconImageSize: [40, 31],
          iconImageOffset: [-19, -44],
          hideIconOnBalloonOpen: false,
          balloonOffset: [3, -50],
        }
      );

      if (!placemarkList[i]) placemarkList[i] = {};
      placemarkList[i] = shopPlacemark;
      placemarkCollections[i] = cityCollection;

      cityCollection.add(shopPlacemark);

      map.geoObjects.add(cityCollection);
    }

    document.querySelectorAll(".contact-shop__item").forEach(function (el) {
      el.addEventListener("click", function (e) {
        let cityId = e.currentTarget.getAttribute("value");
        document
          .querySelector(".contact-shop__input")
          .setAttribute("id", cityId);
      });
    });

    document
      .querySelector(".contact-shop__btn")
      .addEventListener("click", function (e) {
        let inputId = document
          .querySelector(".contact-shop__input")
          .getAttribute("id");
        if (placemarkList[inputId]) {
          placemarkList[inputId].events.fire("click");
        } else {
          document.querySelector(".modal-search").classList.add("active");
        }
      });
  }
}
