var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

    printPlaylists: function () {

    let trackPlaylist = this.playlists;  //gives us p01 and p02
    let playListDetails;
    let trackName;
    let trackLength;

      playListDetails = this.playlists[p0]; //gives us access to p01, p02 object names
      trackName = playListDetails['name'];
      trackLength = playListDetails['tracks'].length;

      console.log(`${p0}: ${trackName} - ${trackLength} tracks`);

    },

    printTracks: function () {

    let libTracks = this.tracks;
    let trackDetails;
    let trackId;
    let trackName;
    let trackArtist;
    let trackAlbum;

    for (let trackNo in libTracks) {
      trackDetails = libTracks[trackNo];
      trackId = trackDetails['id'];
      trackName = trackDetails['name'];
      trackArtist = trackDetails['artist'];
      trackAlbum = trackDetails['album'];

      console.log( `${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    }
  },

    printPlaylist: function (playlistId) {

      let libPlayList = this.playlists;
      let listDetails;
      let playId;
      let playName;
      let numOfTracks;
      let trackName;
      let trackArtist;
      let trackAlbum;

      for (let p0 in libPlayList) {

        listDetails = libPlayList[playlistId];
        playId = listDetails['id'];
        playName = listDetails['name'];
        numOfTracks = listDetails['tracks'].length;

      }
      console.log(`${playId}: ${playName} - ${numOfTracks}`);

      for (let i = 0; i < numOfTracks; i++) {
        theTracks = listDetails['tracks'][i];
        trackName = this.tracks[theTracks].name;
        trackArtist = this.tracks[theTracks].artist;
        trackAlbum = this.tracks[theTracks].album;

        console.log(`${theTracks}: ${trackName} by ${trackArtist} (${trackAlbum})`);
      }
  },

    addTrackToPlaylist: function (trackId, playlistId) {

    let newTrack;

    trackId = this.tracks[trackId];
    newTrack = this.playlists[playlistId].tracks;
    newTrack.push(trackId);

  },

    uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {

    let trackId = uid();
    let newTrack = this.tracks[trackId] = {
      id: trackId,
      name: name,
      artist: artist,
      album: album
    };

  },

  addPlaylist: function (name) {

    let playId = uid();
    let newPlay = this.playlists[playId] = {
      id: playId,
      name: name,
      tracks: []
    };
},

};



