let apiKey = "pk.eyJ1IjoiYW5kcm9uZWRldiIsImEiOiJja3F5MjZnNTIwMHNvMm5vNmoyaTBuaWFkIn0.JiVaHdKKz1te9KKCEyiDGw"
let carte = document.querySelector(".carteBox");

function updateCarte(geojson) {
    carte.style.backgroundImage = "url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/geojson(" + encodeURIComponent(JSON.stringify(geojson)) + ")/auto/500x400?access_token=" + apiKey + "')"

}

// démonstration : 
let demo = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
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
            "properties": {},
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
            "properties": {},
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
            "properties": {},
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
            "properties": {},
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
            "properties": {},
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

updateCarte(
    demo
)