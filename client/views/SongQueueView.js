// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('add', this.playAfterAdding, this);
    this.collection.on('ended', this.dequeue, this); //pass in event
    this.collection.on('remove', this.render, this);
    // this.collection.on('click', this.);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  playAfterAdding: function() {
    if (this.collection.length === 1) {
      this.collection.playFirst();
    }
  },

  dequeue: function() {
    this.collection.dequeue();
  }

});
