$("#contact").on("click", function (event) {
    event.preventDefault();

    var GitHub = $("<a>").text("Github: " + "<a>", "href", "https://github.com/kisjan4ik");
    var LinkedIn = $("<a>").text("LinkedIn: ");
    var email = $("<a>").text("Email: " + "oturetska@yahoo.com");
    var phone = $("<a>").text("Phone #: " + "407-308-16-72")

    $("#contactinfo").append(GitHub, "<br>", LinkedIn, "<br>", email, "<br>", phone)
    console.log(GitHub);
    console.log(LinkedIn);
    console.log(email);
    console.log(phone);
    
})