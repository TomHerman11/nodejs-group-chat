# nodejs-chat
## Description
Creating a chat room, using Node.js & Socket.io
<br/>
<br/>

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
    - Maybe use a Node.Js package called 'fs' to upload files from the file system. 
 - Support private chat:
    - Assume that each user has a unique user ID.
 - Use a DB:
    - So messages will be saved even when the server shuts down
    - Can use a Node.Js package called 'MongoDB'.
- Improve styling:
   - Each user will have their own color.
   - Use functions of jQuery UI: Start with https://www.w3schools.com/jquery/jquery_slide.asp and continue from there.
- Verify that each user has a unique name.
