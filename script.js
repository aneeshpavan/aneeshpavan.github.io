$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
        });
    $('.carousel').carousel('cycle');
});

var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
}

function toggle_light_mode() {
var app = document.getElementsByTagName("BODY")[0];
var rightimage = document.getElementById("rightimg");
if (localStorage.lightMode == "light") {
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    document.getElementById("res").href = "Resume-Yellow.pdf";
} 
else {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    document.getElementById("res").href = "Resume-Blue.pdf";
    }
}
window.addEventListener("storage", function () {
    if (localStorage.lightMode == "dark") {
        app.setAttribute("light-mode", "dark");
    } else {
        app.setAttribute("light-mode", "light");
    }
}, false);