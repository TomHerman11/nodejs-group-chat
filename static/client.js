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

    //ask the user for their name and preferred color:
    (function () {
        let username = prompt("Please enter your username", "El Professor");
        if (!username) { username = "Anonymous_User"; }

        let color = prompt("Please enter your color", "Blue");
        if (!color) { color = "Black"; }

        //Let the socket at the server "know" the value of the username. Each client will have their own username and color.
        socket.emit('usernameAndColor', [username, color]);

        //Let the user see their nickname:
        $("#logged_as_info").html(`Logged as: <strong style="color:` + color + `">` + username + `</strong>`);
    })();

    socket.on('userConnected', (usernameThatJustConnected) => { //() => {} is a nameless function    
        const notification_id = usernameThatJustConnected.replace(/\s/g, "") + '_joined_the_chat'; //remove white spaces from username FOR THE ID, if there's any
        const join_log = `<li id=` + notification_id + `>❣️ <strong>` + usernameThatJustConnected + `</strong> has joined the chat!</li>`;

        //update the logs board:
        $('#logs_board').append(join_log);

        //after 10 seconds, remove the notification:
        setTimeout((id) => {
            $('#logs_board').children('#' + id).remove();
        }, 10000, notification_id);
    });

    socket.on('userDisconnected', (usernameThatJustDisonnected) => { //() => {} is a nameless function    
        const notification_id = usernameThatJustDisonnected.replace(/\s/g, "") + '_left_the_chat'; //remove white spaces from username FOR THE ID, if there's any
        const left_log = `<li id=` + notification_id + `>🙃 <strong>` + usernameThatJustDisonnected + `</strong> has left the chat!</li>`;

        //update the logs board:
        $('#logs_board').append(left_log);

        //after 10 seconds, remove the notification:
        setTimeout((id) => {
            $('#logs_board').children('#' + id).remove();
        }, 10000, notification_id);
    });

    socket.on('updateNumUsersOnline', (num_users_online) => {
        $('#num_users_online_number').html(num_users_online);
    });



    //add to our form a submit attribue (with the following function):
    $('form').submit(function () {
        //verify that the message is not empty / contains only white spaces:
        let user_message = ($('#message_form').val()).replace(/\s/g, "");
        if (user_message === "") {
            return false; //return false = don't refresh page.
        }

        //emit a message that will go to the server
        socket.emit('addChatMessage(client->server)', $('#message_form').val());

        //make message box blank again:
        $('#message_form').val('');
        return false; //return false = don't refresh page.
    });

    //on socket event of "addChatMessage(server->client)", do the following: (add the value to the messages list)
    socket.on('addChatMessage(server->client)', function (msg) {
        $('#messages').append(msg);
        window.scrollTo(0, document.body.scrollHeight);
    });
});
