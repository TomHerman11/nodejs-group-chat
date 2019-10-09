# nodejs-chat
## Description
Creating a chat room as part of our Node.js
![Alt text](README_resources/Nodejs_Chat_Demo.png?raw=true "Node.js Chat Demo")


<br/>

## About the Node modules:
**[Express](https://expressjs.com)** - Express is lightweight web application framework for Node.js. For this simple group chat, it is not necessary to use Express, but if you are planning to continue the development, this is nice to have.  

**[Socket.io](https://socket.io)** - Socket.io is the key module in this tutorial which enables the realtime communication between the clients and the server.  

<br/>

## Credits
**This exercise is based on the example supplied by socket.io:**  
 https://github.com/socketio/chat-example

<br/>

## The Exercises - Support User names
#### Present to the user their username
1. Edit index.html:
   - Add to the header at index.html a new div:
   > ```html
   > <div id=logged_as_info></div>
   > ``` 
   - This div will eventually present to the user their username.
   - You can add css properties or inline style to this div.

2. Edit client.js:
   - Implement a way to get the user's name, by pop-up of any other method. You can use promt() function.
   - Make sure that the username variable has a default value (not empty).
   - Using jQuery, edit the info inside the newly created div (with ```id=logged_as_info```) to contain the information we just recieved from the user.
      - For an example, look at how we append a message to the chat.


#### Support User Names Within Chat
1. Edit client.js:
   - After we recieved the username from the user, and changed the div with ```id=logged_as_info```, we would like to add another property to our socket in the **server** side. Why the server side? so each time we will send a new message in our chat, we want to show all of the users who was the username that sent the message.
   
   In order to do that, emit a new event from the client to the server:
   > ```javascript
   > client_socket.emit('username', username);
   > ```
   
2. Edit Server.js:
   - handle the event of ```'username``` and add to the socket a new property:
   > ```javascript
   > socket.on('username', function (username) {
   >  socket.username = username; //can also use: socket.coco = username;
   > });
   > ```
   
   - Use this ```username``` property when sending a chat message to all of the client (using ```io.emit(...,...)```).

3. **BONUS**: Implement a way so each user will have their own color (use random / array of colors).



<br/>

 ## Further Ideas
 - Show the username to the user (without sending a message). ✔
 - Add a time stamp to each message. ✔
 - Notify when a user logs in or logs out. ✔
 - Show online users. ✔
 - Add “{user} is typing” functionality. ✔
 - CSS: set a maximum width for each message. 
 - Disable the option of sending an empty message. ✔
 - format message:
   - **bold** - * bold *
   - _italic_ - _ italic _
   - ~~strikethrough~~ - ~ strikethrough ~
 - Delete a message:
    - Add a button to each message in order to delete it.
 - Like a message:
    - Same as deletion.
    - Think of a way to filter the messages so only Liked messages will be seen.
    - Think of a way to mark the liked messages so only the relevant user will see their liked messages.
 - Add a profile picture:
    - Maybe you can use a Node.Js package called 'fs' to upload files from the file system. 
 - Support private chat:
    - Assume that each user has a unique user ID.
 - Use a DB:
    - So messages will be saved even when the server shuts down
    - Can use a Node.Js package called 'MongoDB'.
- Improve styling:
   - Each user will have their own color.
   - You can use functions of jQuery UI: Start with https://www.w3schools.com/jquery/jquery_slide.asp and continue from there.
- Verify that each user has a unique name.