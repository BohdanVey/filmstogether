$(document).ready(function() {
    var lat;
    var lng;
    // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(
         function success(position) {
           // for when getting location is a success
          lat=position.coords.latitude;
               lng=position.coords.longitude;
                  console.log(lat,lng);
                  var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
                  console.log(latlng);
                  var geocoder = new google.maps.Geocoder;
                  geocoder.geocode({'location': latlng}, function(results, status) {
                    country=results[0]['address_components'][6]['short_name'];
                    console.log(country);
                    <script src="https://apis.google.com/js/api.js"></script>
            /**
             * Sample JavaScript code for youtube.videos.list
             * See instructions for running APIs Explorer code samples locally:
             * https://developers.google.com/explorer-help/guides/code_samples#javascript
             */

            function authenticate() {
                return gapi.auth2.getAuthInstance()
                    .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
                    .then(function() { console.log("Sign-in successful"); },
                        function(err) { console.error("Error signing in", err); });
            }
            function loadClient() {
                gapi.client.setApiKey("YOUR_API_KEY");
                return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
                    .then(function() { console.log("GAPI client loaded for API"); },
                        function(err) { console.error("Error loading GAPI client for API", err); });
            }
            // Make sure the client is loaded and sign-in is complete before calling this method.
            function execute() {
                return gapi.client.youtube.videos.list({
                "part": "snippet,contentDetails,statistics",
                "chart": "mostPopular",
                "regionCode": "US"
                })
                    .then(function(response) {
                            // Handle the results here (response.result has the parsed body).
                            console.log("Response", response);
                        },
                        function(err) { console.error("Execute error", err); });
            }
            gapi.load("client:auth2", function() {
                gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
            });

                  });
        })
    });
