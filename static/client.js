/*
 * Using $ as jQuery - catch html items in order to add attributes / read their values
 * $('#abc') - catch html item by id=abc
 * $('.abc') - catch html item by class=abc
*/

/* 
 * $(function() {...}) - SHORT FOR 'The Document Ready Event':
 * $(document).ready(function() { ... });
 * 
 * This is to prevent any jQuery code from running before the document is finished loading (is ready).
 * From: https://www.w3schools.com/jquery/jquery_syntax.asp
 */
$(function () {
    var socket = io();

    //ask the user for their name, "anonymous" function:
    (function () {
        let username;
        username = prompt("Please enter your username", "El Professor");
        if (!username) {
            username = "Anonymous_User";
        }

        let color;
        color = prompt("Please enter your color", "Blue");

        //Let the socket "know" the value of the username. Each client will have their own username and color.
        socket.emit('username client -> server', [username, color]);
    })();


    //add to our form a submit attribue (with the following function):
    $('form').submit(function () {
        //emit a message that will go to the server
        socket.emit('chat message client -> server', $('#message_form').val());

        //make message box blank again:
        $('#message_form').val('');
        return false;
    });

    //on socket event of "chat message server -> client", do the following: (add the value to the messages list)
    socket.on('chat message server -> client', function (msg) {
        $('#messages').append(msg);
        window.scrollTo(0, document.body.scrollHeight);
    });

});
