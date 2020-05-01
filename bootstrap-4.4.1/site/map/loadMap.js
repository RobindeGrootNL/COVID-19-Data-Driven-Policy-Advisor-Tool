//https://jvectormap.com/maps/countries/france-regions/
//https://jvectormap.com/tutorials/getting-started/

$(function () {
    //regions of france - 
    //March 25 data https://www.europeandataportal.eu/data/datasets/cas-confirmes-dinfection-au-covid-19-par-region?locale=en
    var caseData = {
        "FR-C": 2093,"FR-B": 1082,"FR-A": 0,"FR-G": 0,"FR-F": 561,"FR-E": 603,"FR-D": 1569,"FR-K": 0,"FR-J": 7660,
        "FR-I": 0,"FR-YT": 35,"FR-O": 0,"FR-N": 0,"FR-M": 5479,"FR-L": 0,"FR-S": 1753,"FR-R": 368,"FR-Q": 688,
        "FR-P": 0,"FR-V": 0,"FR-U": 1927,"FR-T": 0,"FR-RE": 94,"FR-GF": 28,"FR-H": 225,"FR-MQ": 66,"FR-GP": 76,
    };

    $('#map').vectorMap({
        map: 'fr_regions_mill',
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