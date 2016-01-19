/**
 * Created by joshuasisley on 1/18/16.
 */
var demo_input = document.getElementById('demo_input');

var type_this = "Joshua Sisley";
var index = 0;

window.next_letter = function() {
    if (index <= type_this.length) {
        demo_input.value = type_this.substr(0, index++);
        setTimeout("next_letter()", 100);
    }
};

next_letter();
setTimeout("next_page()", 2000);

window.next_page = function() {
    window.location.href = "aboutMe.html";
};