document.addEventListener("DOMContentLoaded", function () {
    var button1 = document.getElementById("b1");
    var isTextVisible = false;
    button1.addEventListener("click", function () {
        var text1 = document.getElementById("semi-1");
        if (isTextVisible) {
            text1.innerHTML = "";
        }
        else {
            text1.innerHTML = "Full Name: Muniza Zubair <br>Nationality: Pakistani <br> Gender: Female <br> Gmail: munizazubairkhan@gmail <br>Contact No: 0123456789 <br>Linkedin Profile:<a href='https://www.linkedin.com/in/muniza-zubair-0882b82b6/'><b>linkedin.com/in muniza-zubair</b></a> <br> ";
        }
        isTextVisible = !isTextVisible;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("b2");
    var isTextVisible = false;
    button.addEventListener("click", function () {
        var text2 = document.getElementById("semi-2");
        if (isTextVisible) {
            text2.textContent = "";
        }
        else {
            text2.innerHTML = "<b> Bachelor Of Business Administration (BBA) </b> <br> XYZ University, Karachi <br><b> Intermediate in Commerce</b> <br> ABC College, Karachi <br><b> Matriculation</b> <br> ABC School, Karachi";
        }
        isTextVisible = !isTextVisible;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var button1 = document.getElementById("b3");
    var isTextVisible = false;
    button1.addEventListener("click", function () {
        var text1 = document.getElementById("semi-3");
        if (isTextVisible) {
            text1.innerHTML = "";
        }
        else {
            text1.innerHTML = "<b>Languages:</b> HTML, CSS, TepeScript<br> <b>Frameworks and Libraries:</b>Next.js <br> <b>Design:</b> Responsive Design Compatibility, Performance Optimization";
        }
        isTextVisible = !isTextVisible;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var button1 = document.getElementById("b4");
    var isTextVisible = false;
    button1.addEventListener("click", function () {
        var text1 = document.getElementById("semi-4");
        if (isTextVisible) {
            text1.innerHTML = "";
        }
        else {
            text1.innerHTML = "XYZ Company, Front-End Developer,<b> 1 Year</b> experience";
        }
        isTextVisible = !isTextVisible;
    });
});
