$("#buttonn").one("click", function (event) {
    event.preventDefault();


    $("#contactinfo").append("<div> <a href='https://github.com/kisjan4ik' target='_blank'> Github </a> </div>");
    $("#contactinfo").append("<div> <a href='https://www.linkedin.com/in/olena-turetska-82126a191/' target='_blank'> LinkedIn </a> </div>");
    $("#contactinfo").append("<div> Email: oturetska@yahoo.com </a> </div>");
    $("#contactinfo").append("<div> Phone #: 407-308-16-72 </a> </div>");

})