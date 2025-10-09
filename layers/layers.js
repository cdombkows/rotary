var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MixerLocation_1 = new ol.format.GeoJSON();
var features_MixerLocation_1 = format_MixerLocation_1.readFeatures(json_MixerLocation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MixerLocation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MixerLocation_1.addFeatures(features_MixerLocation_1);
var lyr_MixerLocation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MixerLocation_1, 
                style: style_MixerLocation_1,
                popuplayertitle: 'Mixer Location',
                interactive: true,
                title: '<img src="styles/legend/MixerLocation_1.png" /> Mixer Location'
            });
var format_ClubLocation_2 = new ol.format.GeoJSON();
var features_ClubLocation_2 = format_ClubLocation_2.readFeatures(json_ClubLocation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClubLocation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClubLocation_2.addFeatures(features_ClubLocation_2);
var lyr_ClubLocation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClubLocation_2, 
                style: style_ClubLocation_2,
                popuplayertitle: 'Club Location',
                interactive: true,
                title: '<img src="styles/legend/ClubLocation_2.png" /> Club Location'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MixerLocation_1.setVisible(true);lyr_ClubLocation_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MixerLocation_1,lyr_ClubLocation_2];
lyr_MixerLocation_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'Name', });
lyr_ClubLocation_2.set('fieldAliases', {'qc_id': 'qc_id', 'club': 'Club', 'meeting da': 'Meeting Date', 'meeting ti': 'Meeting Time', 'meeting sc': 'Meeting Schedule', 'meeting pl': 'Meeting Place', 'address': 'Address', 'city': 'City', 'state': 'State', 'charter da': 'Charter Date', 'category': 'Region', });
lyr_MixerLocation_1.set('fieldImages', {'qc_id': 'Hidden', 'id': 'Hidden', 'name': 'TextEdit', });
lyr_ClubLocation_2.set('fieldImages', {'qc_id': 'Hidden', 'club': 'TextEdit', 'meeting da': 'TextEdit', 'meeting ti': 'TextEdit', 'meeting sc': 'TextEdit', 'meeting pl': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'Hidden', 'charter da': 'Hidden', 'category': 'TextEdit', });
lyr_MixerLocation_1.set('fieldLabels', {'name': 'inline label - always visible', });
lyr_ClubLocation_2.set('fieldLabels', {'club': 'inline label - always visible', 'meeting da': 'inline label - always visible', 'meeting ti': 'inline label - always visible', 'meeting sc': 'inline label - always visible', 'meeting pl': 'inline label - always visible', 'address': 'inline label - always visible', 'city': 'inline label - always visible', 'category': 'inline label - always visible', });
lyr_ClubLocation_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});