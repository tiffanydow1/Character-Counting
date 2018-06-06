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
             }
};

// ********************************************************** //

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// ********************************************************** //

var printPlaylists = function () {

  let trackPlaylist = library.playlists;  //gives us p01 and p02
  let playListDetails;
  let trackName;
  let trackLength;

  for (let p0 in trackPlaylist) {

    playListDetails = library.playlists[p0]; //gives us access to p01, p02 object names
    trackName = playListDetails['name'];
    trackLength = playListDetails['tracks'].length;

    console.log(`${p0}: ${trackName} - ${trackLength} tracks`);
    }
};
printPlaylists();

// ********************************************************** //

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// ********************************************************** //

var printTracks = function () {

  let libTracks = library.tracks;
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
};

  printTracks();

  // ********************************************************** //

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// ********************************************************** //

var printPlaylist = function (playlistId) {

    let libPlayList = library.playlists;
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
      trackName = library.tracks[theTracks].name;
      trackArtist = library.tracks[theTracks].artist;
      trackAlbum = library.tracks[theTracks].album;

      console.log(`${theTracks}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    }
}

printPlaylist('p01');

// ********************************************************** //

// adds an existing track to an existing playlist

// ********************************************************** //

var addTrackToPlaylist = function (trackId, playlistId) {

  let newTrack;

  trackId = library.tracks[trackId];
  newTrack = library.playlists[playlistId].tracks;
  newTrack.push(trackId);

}

addTrackToPlaylist('t01', 'p02');

// ********************************************************** //

// generates a unique id
// (use this for addTrack and addPlaylist)

// ********************************************************** //

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// ********************************************************** //

// adds a track to the library

// ********************************************************** //

var addTrack = function (name, artist, album) {

  let trackId = uid();
  let newTrack = library.tracks[trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  };
  console.log(library.tracks);

}

 addTrack('Pour It Up', 'Rihanna', 'Red Album');

 // ********************************************************** //

// adds a playlist to the library

// ********************************************************** //

var addPlaylist = function (name) {

    let playId = uid();
    let newPlay = library.playlists[playId] = {
      id: playId,
      name: name,
      tracks: []
    };
    console.log(library.playlists);

}

addPlaylist('Tiffanys dank beats');

// ********************************************************** //

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}