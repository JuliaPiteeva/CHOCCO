////////////////Секция map////////////////////////////////////////////////////////////////////////////////

let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.76, 37.65],
    zoom: 13,
    controls: ["zoomControl", "routeButtonControl"],
  });
  control = myMap.controls.get("routeButtonControl");
  control.routePanel.state.set("from", "улица Новый Арбат");

  const coords = [
    [55.74, 37.63],
    [55.77, 37.64],
    [55.76, 37.65],
    [55.75, 37.66],
  ];
  const myCollection = new ymaps.GeoObjectCollection(
    {},
    {
      draggable: false, // и их можно перемещать
      iconLayout: "default#image",
      iconImageHref: "./img/mark.png",
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42],
      zoom: 10,
    }
  );
  coords.forEach((coord) => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable("scrollZoom");
};
ymaps.ready(init);
