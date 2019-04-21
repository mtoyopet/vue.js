(function() {
  App.chat_rooms = App.cable.subscriptions.create("ChatRoomsChannel", {
    connected: function() {},
    disconnected: function() {},
    received: function(data) {}
  });

}).call(this);
