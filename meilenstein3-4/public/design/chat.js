$(function () {
    var socket = io();
    var first = true;
    var username;
    $('#messages').append($('<li>').text("Willkommen, bitte gebe deinen Usernamen ein"));
    $('form').submit(function () {

        if (first) {
            socket.emit('add user', $('#m').val());
            $('#m').val('');
            first = false;
            return false;
        }
        else if (username) {
            socket.emit('chat message', $('#m').val());
            $('#messages').append($('<li>').text(username + ": " +$('#m').val()));
            return false;
        }

    });

    socket.on("add user", function (val) {
        console.log("add user");
        username = val.username;
        $('#messages').append($('<li>').text("Willkommen " + val.username));
    });

    socket.on('chat message', function (msg) {
        console.log("msg", msg)
        $('#messages').append($('<li>').text(msg.username + ": " + msg.message));


    });
});