ymaps.ready(init);

function init(){
    var map = new ymaps.Map('mymap', {
        center: [55.75, 37.62],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
}