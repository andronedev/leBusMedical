var map = L.map('map', {
    fullscreenControl: true,

})


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    // Specify the maximum zoom of the map
    maxZoom: 19,

    // Set the attribution for OpenStreetMaps
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// démonstration : 
let demo = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "isBus": true,
            },
            "geometry": {
                "coordinates": [
                    1.178887835494777,
                    42.96410293387754
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "isBus": false,
            },
            "geometry": {
                "coordinates": [
                    1.1441956796051045,
                    42.98739059011936
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "isBus": false,
            },
            "geometry": {
                "coordinates": [
                    1.1339159966454702,
                    43.004156906296174
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "isBus": false,
            },
            "geometry": {
                "coordinates": [
                    1.1612992627610765,
                    42.97039032727545
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "isBus": false,
            },
            "geometry": {
                "coordinates": [
                    1.1597914492743655,
                    43.003059096613384
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "isBus": false,
            },
            "geometry": {
                "coordinates": [
                    [
                        1.133922612411311,
                        43.00408168399346
                    ],
                    [
                        1.1441808967434497,
                        42.98747964987339
                    ],
                    [
                        1.1612750668911929,
                        42.970440334115125
                    ],
                    [
                        1.178910194673989,
                        42.96417295959239
                    ],
                    [
                        1.1597515315495457,
                        43.00290980004897
                    ]
                ],
                "type": "LineString"
            }
        }
    ]
}


// import geojson
let geojson = demo;

// add geojson to map
L.geoJSON(geojson).addTo(map);


map.fitBounds(L.geoJSON(geojson).getBounds());
