//require is used to consume other node modules (located in node_modules dir, that was created when prompting 'npm install' in the command line)
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

//port can be set manually using the command line, for example "env PORT=8888 node index.js"
const port = process.env.PORT || 3000;

/* DEFINE ROUTES OF OUR SERVER: */
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

/*
 * may define more routes such as:
 * app.get('/saved_messages', function (req, res) {
 *   res.sendFile(__dirname + '/COMPLETE_THIS!.html');
 * });
*/

/*
 * enable using local files, stored in static folder, use this in index.html as:
 * 
 * <script src="/static/hello_world.js"></script>
*/
app.use('/static', express.static(path.join(__dirname, 'static')))


//socket.io:
io.on('connection', function (socket) {
  socket.on('username client -> server', function (usernameAndColor) {
    socket.username = usernameAndColor[0];
    socket.username_color = usernameAndColor[1];
  });

  socket.on('chat message client -> server', function (msg) {
    io.emit('chat message server -> client', '<li><strong style="color:' + socket.username_color + '">' + socket.username + "</strong>: " + msg + "</li>");
  });
});


//start our server:
http.listen(port, function () {
  console.log('listening on localhost:' + port);
});
