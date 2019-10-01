//will be used as a global var
let username;

$(function () {
    (function () {
        username = prompt("Please enter your username", "El Professor");
        if (!username) {
            username = "Anonymous_User";
        }
    })();
});