//https://jvectormap.com/maps/countries/france-regions-2016/
//https://jvectormap.com/tutorials/getting-started/
$.noConflict();
    jQuery( document ).ready(function( $ ) {
    //regions of france - 
    //March 25 data https://www.europeandataportal.eu/data/datasets/cas-confirmes-dinfection-au-covid-19-par-region?locale=en
    var caseData = {
        "FR-GF": 28,
        "FR-H": 225,
        "FR-F": 561,
        "FR-E": 603,
        "FR-X1": 1569,
        "FR-MQ": 66,
        "FR-YT": 35,
        "FR-X4": 5479,
        "FR-X5": 1082,
        "FR-X6": 1753,
        "FR-X7": 2093,
        "FR-X3": 688,
        "FR-R": 368,
        "FR-GP": 76,
        "FR-U": 1927,
        "FR-J": 7660,
        "FR-X2": 912,
        "FR-RE": 94
    };

    $('#map').vectorMap({
        map: 'fr_regions_2016_mill',
        series: {
            regions: [{
                values: caseData,
                scale: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial'
            }]
        },
        backgroundColor: 'white',
        onRegionTipShow: function (e, el, code) {
            el.html(el.html() + ' (Total Cases - ' + caseData[code] + ')');
        }
    });

});