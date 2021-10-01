const map = document.getElementById("map");

if (map) {
  ymaps.ready(function () {
    const myMap = new ymaps.Map(
        "map",
        {
          center: [55.75, 37.62],
          zoom: 14,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark1 = new ymaps.Placemark(
        [55.752831393462664, 37.63848494650637],
        {
          balloonContent: `
          <div class="balloon">
            <h4 class="balloon__title">SitDownPls на Солянке </h4>
            <address class="balloon__address">м. Китай-город, ул. Солянка, д.24</address>
            <a href="tel:+74958854547" class="balloon__tel-number">
                <svg width="100%" height="100%" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3425 12.0983C15.215 12.0983 14.1242 11.915 13.1067 11.585C12.7858 11.475 12.4283 11.5575 12.1808 11.805L10.7417 13.6108C8.1475 12.3733 5.71833 10.0358 4.42583 7.35L6.21333 5.82833C6.46083 5.57167 6.53417 5.21417 6.43333 4.89333C6.09417 3.87583 5.92 2.785 5.92 1.6575C5.92 1.1625 5.5075 0.75 5.0125 0.75H1.84083C1.34583 0.75 0.75 0.97 0.75 1.6575C0.75 10.1733 7.83583 17.25 16.3425 17.25C16.9933 17.25 17.25 16.6725 17.25 16.1683V13.0058C17.25 12.5108 16.8375 12.0983 16.3425 12.0983Z" />
                </svg>
                <span>+7 (495) 885-45-47</span>
            </a>
            <div class="balloon__worktime">
                <span class="grey_text">Часы работы:</span>
                с 10:00 до 21:00
            </div>
            <div class="balloon__description">
                <span class="balloon__grey-text">Что здесь:</span>
                шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
            </div>
        </div>
        `,
        },
        {
          iconLayout: "default#imageWithContent",
          iconImageHref: "images/map-icon.svg",
          iconImageSize: [32, 22],
          iconImageOffset: [-20, 0],
          iconContentOffset: [0],
          iconContentLayout: MyIconContentLayout,
        }
      );

    const myPlacemark2 = new ymaps.Placemark(
      [55.76147157505062, 37.65023838640963],
      {
        balloonContent: `
            <div class="balloon">
            <h4 class="balloon__title">SitDownPls на Покровке </h4>
            <address class="balloon__address">м. Китай-город, ул. Покровке, д.35</address>
            <a href="tel:+74958854547" class="balloon__tel-number">
                <svg width="100%" height="100%" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3425 12.0983C15.215 12.0983 14.1242 11.915 13.1067 11.585C12.7858 11.475 12.4283 11.5575 12.1808 11.805L10.7417 13.6108C8.1475 12.3733 5.71833 10.0358 4.42583 7.35L6.21333 5.82833C6.46083 5.57167 6.53417 5.21417 6.43333 4.89333C6.09417 3.87583 5.92 2.785 5.92 1.6575C5.92 1.1625 5.5075 0.75 5.0125 0.75H1.84083C1.34583 0.75 0.75 0.97 0.75 1.6575C0.75 10.1733 7.83583 17.25 16.3425 17.25C16.9933 17.25 17.25 16.6725 17.25 16.1683V13.0058C17.25 12.5108 16.8375 12.0983 16.3425 12.0983Z" />
                </svg>
                <span>+7 (495) 885-45-47</span>
            </a>
            <div class="balloon__worktime">
                <span class="grey_text">Часы работы:</span>
                с 10:00 до 21:00
            </div>
            <div class="balloon__description">
                <span class="balloon__grey-text">Что здесь:</span>
                шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
            </div>
        </div>
      `,
      },
      {
        iconLayout: "default#imageWithContent",
        iconImageHref: "images/map-icon.svg",
        iconImageSize: [32, 22],
        iconImageOffset: [-20, 0],
        iconContentOffset: [0],
        iconContentLayout: MyIconContentLayout,
      }
    );

    myMap.geoObjects.add(myPlacemark1).add(myPlacemark2);
  });
}
