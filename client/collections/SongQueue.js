// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // console.log(library);
    // library.on('enqueue', this.enqueue, this);
    // library.on('enqueue', console.log('hello'))
  },
  
  playFirstSong: function(){
    this.models[0].play();
  }




});