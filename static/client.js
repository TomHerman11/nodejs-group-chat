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
    var client_socket = io();

    //ask the user for their name and preferred color:
    (function () {
        let username = prompt("Please enter your username", "El Professor");
        if (!username) { username = "Anonymous_User"; }

        let color = prompt("Please enter your color", "Blue");
        if (!color) { color = "Black"; }

        //Let the socket "know" the value of the username. Each client will have their own username and color.
        client_socket.emit('usernameAndColor', [username, color]);

        //Let the user see their nickname:
        $("#logged_as_info").append(`Logged as: <strong style="color:` + color + `">` + username + `</strong>`);
    })();


    //add to our form a submit attribue (with the following function):
    $('form').submit(function () {
        //emit a message that will go to the server
        client_socket.emit('addChatMessage(client->server)', $('#message_form').val());

        //make message box blank again:
        $('#message_form').val('');
        return false;
    });

    //on socket event of "addChatMessage(server->client)", do the following: (add the value to the messages list)
    client_socket.on('addChatMessage(server->client)', function (msg) {
        $('#messages').append(msg);
        window.scrollTo(0, document.body.scrollHeight);
    });
});
