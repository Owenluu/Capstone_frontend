<template>
  <div class="home">
    <div class="about">
      <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
        <div class="container">
          <div class="breadcrumb-content text-center">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li class="active">Sneaker Store Locator</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="map"></div>
      <div class="welcome-area pt-100 pb-95">
        <div class="container">
          <div class="welcome-content text-center">
            <h1>Top 5 Sneaker Stores in Chicago</h1>
            <ul>
              Saint Alfred - 1531 N Milwaukee Ave, Chicago, IL 60622
            </ul>
            <ul>
              Notre - 118 N Peoria St #1N, Chicago, IL 60607
            </ul>
            <ul>
              Round Two - 1501 N Milwaukee Ave, Chicago, IL 60622
            </ul>
            <ul>
              Uprise - 1820 N Milwaukee Ave, Chicago, IL 60647
            </ul>
            <ul>
              House Of Houps - 219 S State St, Chicago, IL 60604
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#map {
  width: 100%;
  height: 700px;
}
</style>

<script>
/* global mapboxgl ,  MapboxDirections */

// import axios from "axios";
export default {
  data: function() {
    return {
      photos: [],
    };
  },
  mounted: function() {
    this.setupMap();
  },
  methods: {
    setupMap: function() {
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API_KEY;
      var map = new mapboxgl.Map({
        style: "mapbox://styles/examples/cj68bstx01a3r2rndlud0pwpv",
        center: {
          lng: -87.623177,
          lat: 41.881832,
        },
        zoom: 12,
        pitch: 40,
        container: "map",
        antialias: true,
      });

      map.addControl(
        new MapboxDirections({
          accessToken: mapboxgl.accessToken,
        }),
        "top-left"
      );

      var popup = new mapboxgl.Popup({ offset: 25 }).setText("City of Chicago");
      var marker = new mapboxgl.Marker()
        .setLngLat([-87.623177, 41.881832])
        .setPopup(popup)
        .addTo(map);
      console.log(marker);
      console.log(map);
      console.log(popup);

      var popup1 = new mapboxgl.Popup({ offset: 25 }).setText("Notre - 669 N Michigan Ave, Chicago, IL 60611");
      var marker1 = new mapboxgl.Marker()
        .setLngLat([-87.6699, 41.8838])
        .setPopup(popup1)
        .addTo(map);
      console.log(marker1);
      console.log(map);
      console.log(popup1);

      var popup2 = new mapboxgl.Popup({ offset: 25 }).setText("Round Two - 1501 N Milwaukee Ave, Chicago, IL 60622");
      var marker2 = new mapboxgl.Marker()
        .setLngLat([-87.6748, 41.9089])
        .setPopup(popup2)
        .addTo(map);
      console.log(marker2);
      console.log(map);
      console.log(popup2);

      var popup3 = new mapboxgl.Popup({ offset: 25 }).setText("Saint Alfred - 1531 N Milwaukee Ave, Chicago, IL 60622");
      var marker3 = new mapboxgl.Marker()
        .setLngLat([-87.6756, 41.9095])
        .setPopup(popup3)
        .addTo(map);
      console.log(marker3);
      console.log(map);
      console.log(popup3);

      var popup4 = new mapboxgl.Popup({ offset: 25 }).setText("Sneaker Geek - 5943 W Madison St, Chicago, IL 60644");
      var marker4 = new mapboxgl.Marker()
        .setLngLat([-87.7735, 41.8799])
        .setPopup(popup4)
        .addTo(map);
      console.log(marker4);
      console.log(map);
      console.log(popup4);

      var popup5 = new mapboxgl.Popup({ offset: 25 }).setText(
        "Adidas Original Flagshop Store - 1532 N Milwaukee Ave, Chicago, IL 60622"
      );
      var marker5 = new mapboxgl.Marker()
        .setLngLat([-87.676, 41.9092])
        .setPopup(popup5)
        .addTo(map);
      console.log(marker5);
      console.log(map);
      console.log(popup5);

      var popup6 = new mapboxgl.Popup({ offset: 25 }).setText(
        "Footaction AKA Jumpman 23 Store - 32 S State St, Chicago, IL 60603"
      );
      var marker6 = new mapboxgl.Marker()
        .setLngLat([-87.6281, 41.8813])
        .setPopup(popup5)
        .addTo(map);
      console.log(marker6);
      console.log(map);
      console.log(popup6);

      var popup7 = new mapboxgl.Popup({ offset: 25 }).setText("Nike Chicago - 669 N Michigan Ave, Chicago, IL 60611");
      var marker7 = new mapboxgl.Marker()
        .setLngLat([-87.6236, 41.8945])
        .setPopup(popup5)
        .addTo(map);
      console.log(marker7);
      console.log(map);
      console.log(popup7);

      map.addControl(new mapboxgl.FullscreenControl());
      map.on("load", function() {
        var bins = 16;
        var maxHeight = 200;
        var binWidth = maxHeight / bins;
        console.log(binWidth);

        for (var i = 0; i < bins; i++) {
          map.addLayer({
            id: "3d-buildings-" + i,
            source: "composite",
            "source-layer": "building",
            filter: [
              "all",
              ["==", "extrude", "true"],
              [">", "height", i * binWidth],
              ["<=", "height", (i + 1) * binWidth],
            ],
            type: "fill-extrusion",
            minzoom: 15,
            paint: {
              "fill-extrusion-color": "#aaa",
              "fill-extrusion-height-transition": {
                duration: 0,
                delay: 0,
              },
              "fill-extrusion-opacity": 0.6,
            },
          });
        }
        if (navigator.mediaDevices === undefined) {
          navigator.mediaDevices = {};
        }

        if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function(constraints) {
            // First get ahold of the legacy getUserMedia, if present
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            // Some browsers just don't implement it - return a rejected promise with an error
            // to keep a consistent interface
            if (!getUserMedia) {
              return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
            }

            // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
            return new Promise(function(resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject);
            });
          };
        }
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then(function(stream) {
            // Set up a Web Audio AudioContext and AnalyzerNode, configured to return the
            // same number of bins of audio frequency data.
            var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

            var analyser = audioCtx.createAnalyser();
            analyser.minDecibels = -90;
            analyser.maxDecibels = -10;
            analyser.smoothingTimeConstant = 0.85;

            var source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);

            analyser.fftSize = bins * 2;

            var dataArray = new Uint8Array(bins);

            function draw(now) {
              analyser.getByteFrequencyData(dataArray);

              // Use that data to drive updates to the fill-extrusion-height property.
              var avg = 0;
              for (var i = 0; i < bins; i++) {
                avg += dataArray[i];
                map.setPaintProperty("3d-buildings-" + i, "fill-extrusion-height", 10 + 4 * i + dataArray[i]);
              }
              avg /= bins;

              // Animate the map bearing and light color over time, and make the light more
              // intense when the audio is louder.
              // map.setBearing(now / 500);
              map.setLight({
                color: "hsl(" + ((now / 100) % 360) + "," + Math.min(50 + avg / 4, 100) + "%,50%)",
                intensity: Math.min(1, (avg / 256) * 10),
              });

              requestAnimationFrame(draw);
            }

            requestAnimationFrame(draw);
          })
          .catch(function(err) {
            console.log("The following gUM error occured: " + err);
          });
      });
    },
  },
};
</script>
