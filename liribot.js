var Spotify = require("node-spotify-api");
var Spotify = new Spotify(MediaKeySession.Spotify);
var Twitter = require("twitter");
var request = require("request");
var fs = require("fs");

require("dotenv").config();

//Look for Spotify api tutorials online .

var searchSpotify = function(songTitle) {
    if (songTitle === undefined) {
        songTitle = "Call Out My Name";
    }

    Spotify.search (
      {
          type:"track",
          query:songTitle
      },
      function(err,data) {
          if (err) {
              console.log("There is an error: " + err);
              return;
          }
      }
    );
};

//twitter api videos

var searchTweets = function() {
    var client = new Twitter(keys.Twitter);
};

var params = {
    screen_name: "Dank Memes"
};
client.get("status/user_timeline",params,function(tweets) {
    if (err) {
        console.log("There is an error: " + err);
        return;
    }
});

