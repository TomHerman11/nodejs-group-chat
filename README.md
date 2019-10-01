# nodejs-workshop-chat
## Description
Creating a chat room as part of our Node.js Workshop


## About the Node modules:
**[Express](https://expressjs.com)** - Express is lightweight web application framework for Node.js. For this simple group chat, it is not necessary to use Express, but if you are planning to continue the development, this is nice to have.  

**[Socket.io](https://socket.io)** - Socket.io is the key module in this tutorial which enables the realtime communication between the clients and the server.  

## Credits
**This exercise is based on the example supplied by socket.io:**  
 https://github.com/socketio/chat-example

## The Exercise - Support User Names
1. Add a new javascript file to 'static' folder called "insert_user_name.js"
2. Add a script section in 'index.html', above the script of 'add_message_to_chat', using the file you just created as the source.
3. In insert_user_name.js implement a way to ask the user for their name (can use prompt() function). Use add_message_to_chat.js as a template.



 ## Further Ideas
 - Disable the option of sending an empty message.
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