var onClick = function (btn) {
    var buttons = document.querySelectorAll(".number");
    var number = Number(buttons[btn].innerHTML);
    number += 1;
    return (buttons[btn].innerHTML = number);
};