module.exports = function(io) {
  // start listen with socket.io
  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('new message', function(msg){
      console.log('new message: ' + msg);
      io.emit('chat message', msg);
    });
  });
}
