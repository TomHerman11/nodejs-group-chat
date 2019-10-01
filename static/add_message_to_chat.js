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
        $('#messages').append($('<li>').text(msg));
        window.scrollTo(0, document.body.scrollHeight);
    });
});
