"use strict";
const sendEmail = function() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "ariestest11@gmail.com",
        Password: "July2212",
        To: "jsaique@aol.com",
        From: document.getElementById("email").value,
        Subject: "New Email Inquiry",
        Body: "And this is the body"
    }).then((message)=>alert("Message Sent!"));
};

//# sourceMappingURL=index.74091446.js.map
